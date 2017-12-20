# React Native Starter

##### Note: (for very specific use case)

Starter Kit of React Native to Manage multiple Apps from the same codebase.

Each App would only differ in just Name, Bundle Identifier & possible Theme

## Usage

**<i class="icon-wrench"></i> SWITCH**

To switch b/w different Apps run :

`yarn configure`

default availble apps:

| Name       |
| :--------- |
| Scheduling |
| Epicor     |
|            |

**<i class="icon-plus"></i> ADD**

To add new Apps do followings in `appconfig` :

1. Add Type in `availableApps` in `appprefs.json` file
2. Update `configureColors`
3. Update `configureImages`

Now your new option be available in `yarn configure` menu

###### dev: [Ahmad](https://github.com/ahmad2smile)
