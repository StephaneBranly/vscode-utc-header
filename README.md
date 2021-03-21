<img
  src="https://raw.githubusercontent.com/StephaneBranly/vscode-utc-header/master/logoUTC.png" 
  width=128>

# UTC Header for VSCode

This extension provides the UTC header integration in VS Code.

```bash
#****************************************************************************************************#
#                                                                                                    #
#                                                                :::    ::: :::::::::::  ::::::::    #
#   test.cpp                                                     :+:    :+:     :+:     :+:    :+:   #
#                                                                +:+    +:+     +:+     +:+          #
#   By: stephane_branly <stephane.branly@etu.utc.fr>             +:+    +:+     +:+     +:+          #
#                                                                +#+    +:+     +#+     +#+          #
#   Created: 2021/03/21 23:56:26 by stephane_branly              +#+    +:+     +#+     +#+          #
#   Updated: 2021/03/21 23:56:26 by stephane_branly              +#+    +#+     +#+     +#+          #
#                                                                #+#    #+#     #+#     #+#    #+#   #
#                                                                 ########      ###      ########    #
#                                                                                                    #
#****************************************************************************************************#
```


## Install

Launch Quick Open with <kbd>⌘</kbd>+<kbd>P</kbd> and enter
```
ext install utcheader
```

## Usage

### Insert a header
 - **macOS** : <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>H</kbd>
 - **Linux** / **Windows** : <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd>.

Header is automatically updated on save.


## Configuration

Default values for **username** and **email** are imported from environment variables.

To override these values, specify these properties in *User Settings* :

```ts
{
  "utcheader.username": string,
  "utcheader.email": string
}
```


## Issues

In case of a bug, or missing feature, please create a [Github Pull Request](https://github.com/StephaneBranly/vscode-utc-header/pulls).

## License

MIT
