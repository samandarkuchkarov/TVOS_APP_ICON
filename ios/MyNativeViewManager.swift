//
//  MyNativeViewManager.swift
//  TVTest
//
//  Created by Macbook on 07/03/25.
//


import Foundation
import React

@objc(MyNativeViewManager)
class MyNativeViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return MyNativeView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
