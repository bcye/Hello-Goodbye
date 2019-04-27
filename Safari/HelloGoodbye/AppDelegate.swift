//
//  AppDelegate.swift
//  HelloGoodbye
//
//  Created by Bruce Roettgers on 07.04.19.
//  Copyright © 2019 Dirk Hulverscheidt. All rights reserved.
//

import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
    
    }
    
    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }
    
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        // more reference: https://stackoverflow.com/a/2926356/8126260
        return true
    }
}
