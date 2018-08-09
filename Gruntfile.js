#!/usr/bin/env node


/*!
 * heyprabhat
 * From the Desk of Prabhat Kumar — CEO, Founder & Scientist.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ___________________________________________________________________________
 *
 * @date      : 08-Aug-2018
 * @license   : MIT
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "heyprabhat®".
 * ___________________________________________________________________________
 */

// "disallowMultipleSpaces": {"allowEOLComments": true}
// "disallowSemicolons": false
// "requireSemicolons": true
// "requireSpaceAfterLineComment": { "allExcept": ["#", "="] }

// global __dirname: true
// global require: true

//# Usage: $ node -v
//# Usage: $ npm -v
//# Usage: $ grunt -version

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
"use strict";

// To load required Node module.
///-----------------------------
var fs    = require('fs');
var path  = require('path');

// To load required NPM modules.
// -----------------------------
var chalk = require('chalk');
var glob  = require('glob');

// Default color defined.
// ----------------------
var noop  = chalk.red;
var yeep  = chalk.green;
var okay  = chalk.blue;
var boop  = chalk.yellow;

var name  = 'Prabhat Kumar';
console.log(chalk.green('Hello! %s'), name);
//=> 'Hello!, Prabhat Kumar.'


// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |--------------------------------------------| 08/Aug/2018 | SEED™ — Umeå.
// ----------------------------------------------------------------------------------------------------------

// An object literals.
///-------------------
var build = {
  ///Nonidentifier property names are quoted.
  "system": "SEED™",
  "name": "Umeå",
  "audience": "for all beloved family members."
};

// A smart license function.
///-------------------------
var license = [
'/*!                                                                                                  ',
' * heyprabhat® — %(version)s                                                                         ',
' * Hey Prabhat — A Personal Writings.                                                                ',
' * ---------------------------------------------------------------------------                       ',
' * Copyright © 2008 - ' + new Date().getFullYear() + ', Prabhat Kumar, All rights reserved.          ',
' * ---------------------------------------------------------------------------                       ',
' * Copyright © 2014 - ' + new Date().getFullYear() + ', Sequømics Research, All rights reserved.     ',
' * Copyright © 2014 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.  ',
' * ---------------------------------------------------------------------------                       ',
' * HomePage: http://research.sequomics.com/ or http://sequomics.com/                                 ',
' * ---------------------------------------------------------------------------                       ',
' * Available via the Apache, version 2.0. [http://www.apache.org/licenses/]                          ',
' * See: https://github.com/heyprabhat — for details.                                                 ',
' * ---------------------------------------------------------------------------                       ',
' */                                                                                                  ',
'\n',
'/*!                                                                                                  ',
' * Build System — ' + build.system + ':' + build.name + ' — ' + '%(version)s' + ' — '+ build.audience ,
' * ---------------------------------------------------------------------------                       ',
' * Copyright © 2015 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.  ',
' * Available via the Apache, version 2.0. [http://www.apache.org/licenses/]                          ',
' * See: http://seed.sequomics.com/ — for details.                                                    ',
' * ---------------------------------------------------------------------------                       ',
' */                                                                                                  ',
'\n',
].map(function(s) {
  return s.replace(/\s+$/, '');
}).join("\n");
