import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname)

// Paths
const srcAssets = path.join(root, 'src', 'assets')
const publicDir = path.join(root, 'public')

// Create public dir if not exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// 1. Copy folders
const foldersToMove = ['images', 'videos']
foldersToMove.forEach(folder => {
  const srcFolder = path.join(srcAssets, folder)
  const destFolder = path.join(publicDir, folder)
  
  if (fs.existsSync(srcFolder)) {
    if (!fs.existsSync(destFolder)) {
      // Use copy to bypass EPERM lock from dev server
      fs.cpSync(srcFolder, destFolder, { recursive: true })
      console.log(`Copied ${folder} to public directory`)
    }
  }
})

// 2. Find all JS/JSX files and replace paths
const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8')
  let changed = false
  
  // Replace direct string paths
  if (content.includes('/src/assets/images/')) {
    content = content.replace(/\/src\/assets\/images\//g, '/images/')
    changed = true
  }
  if (content.includes('/src/assets/videos/')) {
    content = content.replace(/\/src\/assets\/videos\//g, '/videos/')
    changed = true
  }
  
  // Replace relative paths
  if (content.includes('assets/images/')) {
    content = content.replace(/(?:\.\.\/)+assets\/images\//g, '/images/')
    changed = true
  }
  if (content.includes('assets/videos/')) {
    content = content.replace(/(?:\.\.\/)+assets\/videos\//g, '/videos/')
    changed = true
  }

  // Handle ES6 imports: import heroBg from '/images/hero/hero-bg.jpg'
  // When an image is in public, you don't import it in Vite, you just use the string '/images/...' directly.
  // E.g., style={{ backgroundImage: `url('/images/hero/hero-bg.jpg')` }}
  // We'll let manual fixes handle complex imports, but string replacements usually fix 90% of dynamic data mapping.
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`Updated paths in ${path.basename(filePath)}`)
  }
}

const walkDir = (dir) => {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath)
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath)
    }
  }
}

walkDir(path.join(root, 'src'))

console.log('Asset migration complete!')
