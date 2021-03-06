import * as helpers from './../../helpers';
import * as path from 'path';
import * as fs from 'fs';
import { IconConfiguration } from "../../models/IconConfiguration.interface";

export const enableSpecificFolderIcons = () => {
    return insertSpecificFolderIcons().then(helpers.promptToReload);
};

/** Add specific folder icons to the json file */
const insertSpecificFolderIcons = (): Promise<void> => {
    const iconJSONPath = path.join(helpers.getExtensionPath(), 'out', 'src', 'material-icons.json');
    return helpers.getMaterialIconsJSON().then(config => {
        fs.writeFileSync(iconJSONPath, JSON.stringify(createConfigWithSpecificFolders(config), null, 2));
    });
};

/** Create new config with specific folder icons */
export const createConfigWithSpecificFolders = (config: IconConfiguration) => {
    return {
        ...config,
        folder: "_folder",
        folderExpanded: "_folder_open",
        folderNames: {
            "src": "_folder_src",
            "dist": "_folder_dist",
            "out": "_folder_dist",
            "build": "_folder_dist",
            "source": "_folder_src",
            "sources": "_folder_src",
            "css": "_folder_css",
            "stylesheet": "_folder_css",
            "style": "_folder_css",
            "styles": "_folder_css",
            "sass": "_folder_sass",
            "scss": "_folder_sass",
            "images": "_folder_images",
            "image": "_folder_images",
            "img": "_folder_images",
            "icons": "_folder_images",
            "icon": "_folder_images",
            "ico": "_folder_images",
            "script": "_folder_scripts",
            "scripts": "_folder_scripts",
            "node_modules": "_folder_node",
            "js": "_folder_js",
            "font": "_folder_font",
            "fonts": "_folder_font",
            "test": "_folder_test",
            "tests": "_folder_test",
            "__tests__": "_folder_test",
            "__snapshots__": "_folder_test",
            "__mocks__": "_folder_test",
            "__test__": "_folder_test",
            "spec": "_folder_test",
            "specs": "_folder_test",
            "docs": "_folder_docs",
            ".github": "_folder_git",
            ".git": "_folder_git",
            "submodules": "_folder_git",
            ".submodules": "_folder_git",
            ".vscode": "_folder_vscode",
            ".vscode-test": "_folder_vscode",
            "view": "_folder_views",
            "views": "_folder_views",
            "vue": "_folder_vue",
            ".expo": "_folder_expo",
            "config": "_folder_config",
            "i18n": "_folder_i18n",
            "locale": "_folder_i18n",
            "locales": "_folder_i18n",
            "components": "_folder_components",
            "aurelia_project": "_folder_aurelia"
        },
        folderNamesExpanded: {
            "src": "_folder_src_open",
            "dist": "_folder_dist_open",
            "out": "_folder_dist_open",
            "build": "_folder_dist_open",
            "source": "_folder_src_open",
            "sources": "_folder_src_open",
            "css": "_folder_css_open",
            "stylesheet": "_folder_css_open",
            "style": "_folder_css_open",
            "styles": "_folder_css_open",
            "sass": "_folder_sass_open",
            "scss": "_folder_sass_open",
            "images": "_folder_images_open",
            "image": "_folder_images_open",
            "img": "_folder_images_open",
            "icons": "_folder_images_open",
            "icon": "_folder_images_open",
            "ico": "_folder_images_open",
            "script": "_folder_scripts_open",
            "scripts": "_folder_scripts_open",
            "node_modules": "_folder_node_open",
            "js": "_folder_js_open",
            "font": "_folder_font_open",
            "fonts": "_folder_font_open",
            "test": "_folder_test_open",
            "tests": "_folder_test_open",
            "__tests__": "_folder_test_open",
            "__snapshots__": "_folder_test_open",
            "__mocks__": "_folder_test_open",
            "__test__": "_folder_test_open",
            "spec": "_folder_test_open",
            "specs": "_folder_test_open",
            "docs": "_folder_docs_open",
            ".github": "_folder_git_open",
            ".git": "_folder_git_open",
            "submodules": "_folder_git_open",
            ".submodules": "_folder_git_open",
            ".vscode": "_folder_vscode_open",
            ".vscode-test": "_folder_vscode_open",
            "view": "_folder_views_open",
            "views": "_folder_views_open",
            "vue": "_folder_vue_open",
            ".expo": "_folder_expo_open",
            "config": "_folder_config_open",
            "i18n": "_folder_i18n_open",
            "locale": "_folder_i18n_open",
            "locales": "_folder_i18n_open",
            "components": "_folder_components_open",
            "aurelia_project": "_folder_aurelia_open"
        }
    };
};