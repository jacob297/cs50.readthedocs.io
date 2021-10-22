# Visual Studio Code

Visual Studio Code for CS50 is a web app at [code.cs50.io](https://code.cs50.io/) that adapts [GitHub Codespaces](https://github.com/features/codespaces) for students and teachers. It automates the process of creating a [repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) inside of CS50's GitHub organization, pushing to it an initial [`.devcontainer.json`](https://github.com/cs50/codespace/blob/main/.devcontainer.json), and creating a codespace. Ultimately, it allows students to start programming with just a browser, without needing to install or configure anything locally on their own computer. Within their browser is a full-fledged version of [Visual Studio Code](https://code.visualstudio.com/), aka VS Code, including a tabbed text editor, terminal window (connected to a Docker containing running Ubuntu 20.04), and graphical file explorer.

## Getting Started

### User Interface

See [code.visualstudio.com/docs/getstarted/userinterface](https://code.visualstudio.com/docs/getstarted/userinterface).

### Themes

See [code.visualstudio.com/docs/getstarted/themes](https://code.visualstudio.com/docs/getstarted/themes).

### Settings

See [code.visualstudio.com/docs/getstarted/settings](https://code.visualstudio.com/docs/getstarted/settings).

## Deleting a Codespace

**Deleting a codespace will delete all files and folders therein.** If you are sure you want to delete a codespace:

1. Visit [code.cs50.io/settings](https://code.cs50.io/settings).
2. Under **Your codespaces**, to the right of `main`, click ***...***, select **Delete**, and click **OK**.

You can then create a new codespace by logging back into [code.cs50.io](https://code.cs50.io/).

## Customizing a Codespace

VS Code supports quite a few [settings](https://code.visualstudio.com/docs/getstarted/settings) via which you can customize a codespace:

1. User settings, which "apply globally to any instance of VS Code you open" and can be applied to codespaces as well via [Settings Sync](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync).
1. Remote settings, which are set by CS50 via `.devcontainer.json` file in your codespace.
1. Workspace settings, which can be set by you via VS Code's GUI (or by editing `.vscode/settings.json` manually).

[Remote settings override User settings](https://code.visualstudio.com/docs/getstarted/settings#_settings-precedence). And [Workspace settings override Remote settings](https://docs.github.com/en/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration).

If you use VS Code outside of CS50, you might thus want to store most of your settings in User settings (and enable Settings Sync). And if there are any Remote settings set by CS50 that you would like to override, you can do so via Workspace settings.