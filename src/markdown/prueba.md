<p align="center">
  <a href="https://github.com/chakra-ui/chakra-ui">
    <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" alt="Chakra logo" width="300" />
  </a>
</p>

<h1 align="center">Build Accessible React Apps with Speed ⚡️</h1>
<br />

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@chakra-ui/react"/>
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/chakra-ui/chakra-ui.svg?logo=lgtm&logoWidth=18"/>
  <a href="https://github.com/chakra-ui/chakra-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@chakra-ui/react.svg?style=flat"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/chakra-ui/chakra-ui" />
  <a href="https://discord.gg/chakra-ui">
    <img alt="Discord" src="https://img.shields.io/discord/660863154703695893.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" />
  </a>
</p>

<br />

Chakra UI is a comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. The library offers a diverse range of components that can be easily combined to build complex user interfaces while adhering to accessibility best practices.

## Table of contents

- 📋 [Documentation](#documentation)
- 🚀 [Features](#features)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 📚 [CodeSandbox Templates](#codesandbox-templates)
- 📖 [`create-react-app` Templates](#create-react-app-templates)
- 📝 [Contributing](#contributing)
- 💖 [Support](#support-chakra-ui)
- 🙌 [Testimonials](#testimonials)
- 🏆 [Awards and Mentions](#awards-and-mentions)
- ✨ [Contributors](#contributors)
- ⚖️ [License](#license)

## Documentation

It's the https://chakra-ui.com website for the latest version of Chakra UI. For
older versions head over here

- v1: https://v1.chakra-ui.com
- v0: https://v0.chakra-ui.com

## Features

- Ease of Styling: Chakra UI contains a set of layout components like `Box` and
  `Stack` that make it easy to style your components by passing props.
  [Learn more](https://chakra-ui.com/style-props)
- Flexible & composable: Chakra UI components are built on top of a React UI
  Primitive for endless composability.
- Accessible. Chakra UI components follow the WAI-ARIA guidelines specifications
  and have the right `aria-*` attributes.
- Dark Mode 😍: Most components in Chakra UI are dark mode compatible.

## Installation

To use Chakra UI components, all you need to do is install the
`@chakra-ui/react` package and its peer dependencies:

```sh
$ yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

# or

$ npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ChakraProvider` provided by
   **@chakra-ui/react**.

```jsx
import { ChakraProvider } from "@chakra-ui/react"

// Do this at the root of your application
function App({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you
can toggle between light and dark mode within your app.

2. Now you can start using components like so!:

```jsx
import { Button } from "@chakra-ui/react"

function Example() {
  return <Button>I just consumed some ⚡️Chakra!</Button>
}
```

More guides on how to get started are available
[here](https://chakra-ui.com/getting-started)

## CodeSandbox Templates

- JavaScript Starter: https://codesandbox.io/s/chakra-ui-javascript-lzzg9
- TypeScript Starter: https://codesandbox.io/s/chakra-ui-typescript-pomi8
- NextJS TypeScript Starter:
  https://codesandbox.io/s/chakra-ui-next-js-typescript-kxvyr

## `create-react-app` Templates

[Check out our guide](https://chakra-ui.com/getting-started/cra-guide) for
information on how to use our official `create-react-app` templates.

## Contributing

Feel like contributing? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.

Our docsite lives in a
[separate repo](https://github.com/chakra-ui/chakra-ui-docs). If you're
interested in contributing to the documentation, check out the
[docsite contribution guide](https://github.com/chakra-ui/chakra-ui-docs/blob/main/CONTRIBUTING.md).

## Support Chakra UI

### Organizations

Support this project with your organization. Your logo will show up here with a
link to your website.
[[Contribute](https://opencollective.com/chakra-ui/contribute)]

<a href="https://opencollective.com/chakra-ui/organization/0/website"><img src="https://opencollective.com/chakra-ui/organization/0/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/1/website"><img src="https://opencollective.com/chakra-ui/organization/1/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/2/website"><img src="https://opencollective.com/chakra-ui/organization/2/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/3/website"><img src="https://opencollective.com/chakra-ui/organization/3/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/4/website"><img src="https://opencollective.com/chakra-ui/organization/4/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/5/website"><img src="https://opencollective.com/chakra-ui/organization/5/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/6/website"><img src="https://opencollective.com/chakra-ui/organization/6/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/7/website"><img src="https://opencollective.com/chakra-ui/organization/7/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/8/website"><img src="https://opencollective.com/chakra-ui/organization/8/avatar.svg?avatarHeight=130"></a>
<a href="https://opencollective.com/chakra-ui/organization/9/website"><img src="https://opencollective.com/chakra-ui/organization/9/avatar.svg?avatarHeight=130"></a>

### Individuals

By donating \$5 or more you can support the ongoing development of this project.
We'll appreciate some support. Thank you to all our supporters! 🙏
[[Contribute](https://opencollective.com/chakra-ui/contribute)]

<a href="https://opencollective.com/chakra-ui"><img src="https://opencollective.com/chakra-ui/individuals.svg?width=890"></a>

## Testimonials

> People throw React component libraries and design systems at me regularly.
> This might be the best one I've seen. The APIs are simple but composable and
> the accessibility on the couple components I looked is complete.
>
> Great work @thesegunadebayo, really inspiring work. –
> [Ryan Florence](https://twitter.com/ryanflorence/status/1169260008069947392)

> Awesome new open-source component library from @thesegunadebayo. Really
> impressive stuff! –
> [Colm Tuite](https://twitter.com/colmtuite/status/1169622886052782081)

> This is incredible work. Amazing job Segun! –
> [Lee Robinson](https://twitter.com/leeerob/status/1169330130361159682)

> Chakra UI is glorious! I love the consistent use of focus styling and the
> subtle animation –
> [Guillermo ▲](https://twitter.com/rauchg/status/1169632334389248000)

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

([emoji key](https://allcontributors.org/docs/en/emoji-key)):

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## Testing supported by

<img width="200" src="https://i.imgur.com/eeuDARI.png" alt="BrowserStack"/>

## License

MIT © [Segun Adebayo](https://github.com/segunadebayo)