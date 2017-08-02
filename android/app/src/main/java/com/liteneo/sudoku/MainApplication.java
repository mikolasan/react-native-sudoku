package com.liteneo.sudoku;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.learnium.RNDeviceInfo.RNDeviceInfo;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNI18nPackage(),
          new RNDeviceInfo(),
          new SplashScreenPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
