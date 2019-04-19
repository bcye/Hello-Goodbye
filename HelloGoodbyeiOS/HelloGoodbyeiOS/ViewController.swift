//
//  ViewController.swift
//  HelloGoodbyeiOS
//
//  Created by Bruce Roettgers on 14.04.19.
//  Copyright © 2019 Dirk Hulverscheidt. All rights reserved.
//

import UIKit
import FLAnimatedImage

class ViewController: UIViewController {

    @IBOutlet weak var imageView: FLAnimatedImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let path = Bundle.main.path(forResource: "hellogoodbye", ofType: "gif")
        let url = URL(fileURLWithPath: path!)
        let gifData = try! Data(contentsOf: url)
        let imageData = try! FLAnimatedImage(animatedGIFData: gifData)
        imageView.animatedImage = imageData
    }


}

