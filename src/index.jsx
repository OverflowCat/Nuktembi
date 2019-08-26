import {Button, TextView, TextInput, contentView} from 'tabris';
import * as core from './ManchuCore';
contentView.append(
  <$>
    <Button center onSelect={showText}>Tap here</Button>
    <TextView centerX bottom='prev() 20' font='24px'/>
  </$>
);

new TextInput({
  left: 16, right: 16,
  keyboard: 'multiline',
  message: 'Manchu or transcription'
}).onInput(({text}) => console.log(`Text changed to ${text}`))
  .appendTo(contentView);


function showText() {
  $(TextView).only().text = 'Tabris.js rocks!';
}
