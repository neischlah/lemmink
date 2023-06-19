# Lemmink

Do you visit communities on overloaded Lemmy servers? Do you want to subscribe to communities hosted on other Lemmy servers with ease? This browser extension adds Lemmy links using a configured server instead of the current one.

This code is in a very early stage, so use with caution.

Open the

## Features

- Adds links to your home instance on:
  - Links with text like `!community@some.instance` => `https://home.instance/c/community@some.instance`
  - Relative community links like `/c/community` or `/m/community` => `https://home.instance/c/community@current.page`

## Known Issues

- The page returns `404: couldnt_find_community` – Your home server did not sync the selected foreign server yet. Try again later.
- No home server links appear
  - Did you click on the extension icon?
  - Currently, Lemmink only modifies [known Lemmy servers](https://github.com/maltfield/awesome-lemmy-instances), kbin and some more. Please write an issue if you miss a server on the list.

## TODO

- Testing
- Add pipeline to create XPI file
- Use Lemmy server list repo directly
- Cleanup

## Planned Features

- Chrome support
- Edit links in the community browser, e.g. https://browse.feddit.de/
- Also edit user links
- Better support for kbin

## Credits

[WebExtension Vite Starter](https://github.com/antfu/vitesse-webext)
