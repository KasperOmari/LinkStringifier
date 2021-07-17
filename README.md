# LinkStringifier
LinkStringifier is a userscript that helps you to highlight and copy link texts.

## Example
If you needed to copy `a hyberlink` from the following hyberlink text:
- [This is a hyberlink text](http://example.com).

You will struggle to have only the needed text highlighted, so as a workaround you might end up highlighting the whole `This is a hyberlink text`, copy it then remove the extra texts before and after it. Or you can hack it and inspict it's parent HTML element!

LinkStringifier will help you in such cases by converting all the text hyberlinks to a texts to make it easier to highlight any piece of the text without extra effort.

After enabling LinkStringifier, the hyberlink will be shown as the following *when you hover it*:
- This is a hyberlink text [🔗](http://example.com).

# Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/).
1. View the [LinkStringifier.js](https://github.com/KasperOmari/LinkStringifier/blob/main/LinkStringifier.js) file and click the *Raw* button at the top of the file to view its source. [[Direct Link to its raw](https://raw.githubusercontent.com/KasperOmari/LinkStringifier/main/LinkStringifier.js)].
1. Copy the source code.
1. Open Tampermonkey in your browser and click the Add Script tab (icon with a plus symbol).
1. Paste the source into the script window and hit save.
1. Enjoy it!
