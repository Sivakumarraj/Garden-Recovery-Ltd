import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://preview--flora-finds-central.lovable.app/');
  
  // Wait for the app to load
  await page.waitForLoadState('networkidle');

  // Evaluate and extract all typography and spacing from main elements
  const styles = await page.evaluate(() => {
    function getStyles(selector) {
      const el = document.querySelector(selector);
      if (!el) return null;
      const comp = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        fontFamily: comp.fontFamily,
        fontSize: comp.fontSize,
        fontWeight: comp.fontWeight,
        lineHeight: comp.lineHeight,
        letterSpacing: comp.letterSpacing,
        color: comp.color,
        backgroundColor: comp.backgroundColor,
        padding: comp.padding,
        margin: comp.margin,
        textTransform: comp.textTransform
      };
    }

    return {
      h1: getStyles('h1'),
      heroDescription: getStyles('h1 + p'),
      h2: getStyles('h2'),
      buttonPrimary: getStyles('button, .btn-primary, [class*="bg-primary"]'),
      sectionPadding: getStyles('section'),
      navbar: getStyles('nav')
    };
  });

  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
