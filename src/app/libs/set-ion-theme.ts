export function setIon4Theme(theme: string = 'primary') {
  const ROOT = document.documentElement;
  ROOT.style.setProperty('--ion-color-primary', `var(--ion-color-${theme})`);
  ROOT.style.setProperty('--ion-color-primary-contrast', `var(--ion-color-${theme}-contrast)`);
  ROOT.style.setProperty('--ion-color-primary-rgb', `var(--ion-color-${theme}-rgb)`);
  ROOT.style.setProperty('--ion-color-primary-contrast-rgb', `var(--ion-color-${theme}-contrast-rgb)`);
  ROOT.style.setProperty('--ion-color-primary-tint', `var(--ion-color-${theme}-tint)`);
  ROOT.style.setProperty('--ion-color-primary-shade', `var(--ion-color-${theme}-shade)`);
}
