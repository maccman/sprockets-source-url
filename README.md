# Sprockets Source URL

Source URLs are awesome little 'meta comments' that the browser can use for finding the names of scripts. For example:

    //@ sourceURL=my/script/name

This means that instead of seeing one compiled file in Chrome's inspector, like this:

![Before](http://img.svbtle.com/maccman-24080139362178-raw.png)

You see your whole directory tree:

![After](http://img.svbtle.com/maccman-24080139476460-raw.png)

So much easier to navigate! The alternative to this is to spit out multiple script tags into the page.

## Usage

Just require `sprockets/source_url` in development.

## @sourceURL

Both Chrome and Firefox have `@sourceURL` support. For more information, please see this [excellent post on the subject](http://pmuellr.blogspot.com/2009/06/debugger-friendly.html).