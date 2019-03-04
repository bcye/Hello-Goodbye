//
//  ContentBlockerRequestHandler.swift
//  Extension
//
//  Created by Bruce Roettgers on 02.03.19.
//  Copyright © 2019 Dirk Hulverscheidt. All rights reserved.
//

import Foundation

class ContentBlockerRequestHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let attachment = NSItemProvider(contentsOf: Bundle.main.url(forResource: "blockerList", withExtension: "json"))!
        
        let item = NSExtensionItem()
        item.attachments = [attachment]
        
        context.completeRequest(returningItems: [item], completionHandler: nil)
    }
    
}
