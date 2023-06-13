# Lemmink

Do you visit communities on overloaded Lemmy servers? Do you want to subscribe to communities hosted on other Lemmy servers with ease? This Firefox extension adds Lemmy links using a configured server instead of the current one.

This code is in a very early stage, so use with caution.

Go to `about:addons`, select Lemmink and set your home instance in the `Options` tab.

## Known Issues

- The page returns `404: couldnt_find_community` – Your home server did not sync the selected community yet. Try again later.
- No home server links appear – Currently, Lemmink only modifies [known Lemmy servers](https://github.com/maltfield/awesome-lemmy-instances) (+ some more). Write an issue if the server you are visiting is not listed there.

## TODO

- Testing
- Add pipeline to create XPI file
- Add build pipeline to be able to use Typescript and imports
- Edit links which only appear after scrolling
- Use Lemmy server list repo directly

## Planned Features

- Chrome support
- Edit links in the community browser, e.g. https://browse.feddit.de/
- Edit for user links

## Credits

[WebExtension Vite Starter](https://github.com/antfu/vitesse-webext)
