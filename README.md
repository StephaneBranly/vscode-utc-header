<img
  src="https://raw.githubusercontent.com/StephaneBranly/vscode-utc-header/master/logoUTC.png" 
  width=128>

# UTC Header for VSCode

This extension provides the UTC header integration in VS Code.

```bash
# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    vscode-utc-header                                  :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: kube <hello@kube.io>                       +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2013/11/18 13:37:42 by kube              #+#    #+#              #
#    Updated: 2016/09/18 13:11:04 by kube             ###   ########.fr        #
#                                                                              #
# **************************************************************************** #
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

In case of a bug, or missing feature, please create a [Github Pull Request](https://github.com/kube/vscode-42header/pulls).

## License

MIT
