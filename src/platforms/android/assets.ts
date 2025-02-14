import {
  AssetKind,
  AndroidOutputAssetTemplate,
  AndroidDensity,
  Format,
  Orientation,
  Platform,
  AndroidOutputAssetTemplateAdaptiveIcon,
  AndroidOutputAssetTemplateSplash,
  Theme,
} from '../../definitions';

export const ANDROID_LDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 81,
  height: 81,
  density: AndroidDensity.Ldpi,
};

export const ANDROID_MDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 108,
  height: 108,
  density: AndroidDensity.Mdpi,
};

export const ANDROID_HDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 162,
  height: 162,
  density: AndroidDensity.Hdpi,
};

export const ANDROID_XHDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 216,
  height: 216,
  density: AndroidDensity.Xhdpi,
};

export const ANDROID_XXHDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 324,
  height: 324,
  density: AndroidDensity.Xxhdpi,
};

export const ANDROID_XXXHDPI_ADAPTIVE_ICON: AndroidOutputAssetTemplateAdaptiveIcon = {
  platform: Platform.Android,
  kind: AssetKind.Icon,
  format: Format.Png,
  width: 432,
  height: 432,
  density: AndroidDensity.Xxxhdpi,
};

//
// Splash screens
//
export const ANDROID_LAND_LDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 320,
  height: 240,
  density: AndroidDensity.LandLdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_MDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 480,
  height: 320,
  density: AndroidDensity.LandMdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_HDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 800,
  height: 480,
  density: AndroidDensity.LandHdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 1280,
  height: 720,
  density: AndroidDensity.LandXhdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XXHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 1600,
  height: 960,
  density: AndroidDensity.LandXxhdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XXXHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 1920,
  height: 1280,
  density: AndroidDensity.LandXxxhdpi,
  orientation: Orientation.Landscape,
};

export const ANDROID_PORT_LDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 240,
  height: 320,
  density: AndroidDensity.PortLdpi,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_MDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 320,
  height: 480,
  density: AndroidDensity.PortMdpi,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_HDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 480,
  height: 800,
  density: AndroidDensity.PortHdpi,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 720,
  height: 1280,
  density: AndroidDensity.PortXhdpi,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XXHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 960,
  height: 1600,
  density: AndroidDensity.PortXxhdpi,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XXXHDPI_SCREEN: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.Splash,
  format: Format.Png,
  width: 1280,
  height: 1920,
  density: AndroidDensity.PortXxxhdpi,
  orientation: Orientation.Portrait,
};

// Dark/night mode splashes

export const ANDROID_LAND_LDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 320,
  height: 240,
  density: AndroidDensity.LandLdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_MDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 480,
  height: 320,
  density: AndroidDensity.LandMdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_HDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 800,
  height: 480,
  density: AndroidDensity.LandHdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 1280,
  height: 720,
  density: AndroidDensity.LandXhdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XXHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 1600,
  height: 960,
  density: AndroidDensity.LandXxhdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_LAND_XXXHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 1920,
  height: 1280,
  density: AndroidDensity.LandXxxhdpiNight,
  orientation: Orientation.Landscape,
};

export const ANDROID_PORT_LDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 240,
  height: 320,
  density: AndroidDensity.PortLdpiNight,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_MDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 320,
  height: 480,
  density: AndroidDensity.PortMdpiNight,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_HDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 480,
  height: 800,
  density: AndroidDensity.PortHdpiNight,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 720,
  height: 1280,
  density: AndroidDensity.PortXhdpiNight,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XXHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 960,
  height: 1600,
  density: AndroidDensity.PortXxhdpiNight,
  orientation: Orientation.Portrait,
};

export const ANDROID_PORT_XXXHDPI_SCREEN_DARK: AndroidOutputAssetTemplateSplash = {
  platform: Platform.Android,
  kind: AssetKind.SplashDark,
  format: Format.Png,
  width: 1280,
  height: 1920,
  density: AndroidDensity.PortXxxhdpiNight,
  orientation: Orientation.Portrait,
};
