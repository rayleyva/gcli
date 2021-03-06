/*
 * Copyright 2012, Mozilla Foundation and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(function(require, exports, module) {

'use strict';

/**
 * The chromeWindow as as required by Highlighter, so it knows where to
 * create temporary highlight nodes.
 */
exports.chromeWindow = undefined;

/**
 * See docs in lib/util/host.js:flashNodes
 */
exports.flashNodes = function(nodes, match) {
  // Commented out until Bug 653545 is completed
  /*
  if (exports.chromeWindow == null) {
    console.log('flashNodes has no chromeWindow. Skipping flash');
    return;
  }

  var imports = {};
  Components.utils.import("resource:///modules/highlighter.jsm", imports);

  imports.Highlighter.flashNodes(nodes, exports.chromeWindow, match);
  */
};

/**
 * See docs in lib/util/host.js:exec
 */
exports.exec = function(execSpec) {
  throw new Error('Not supported');
};


});
