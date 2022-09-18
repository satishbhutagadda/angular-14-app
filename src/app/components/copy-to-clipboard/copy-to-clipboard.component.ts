import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyTextBox(textbox: HTMLTextAreaElement){
    textbox.focus();
    textbox.select();

    // copy text TO the clipboard
    navigator.clipboard.writeText(textbox.value).then(_ => {
      alert("Copied to clipboard");
    });

    // get text FROM the clipboard
    navigator.clipboard.readText().then(copiedText => {
      console.log('Copied Text: ', copiedText);
    });
  }
}
