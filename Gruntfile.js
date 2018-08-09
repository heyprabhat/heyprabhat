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
 * --/The Heart of Build System/-- of "grunt-roller®".
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
