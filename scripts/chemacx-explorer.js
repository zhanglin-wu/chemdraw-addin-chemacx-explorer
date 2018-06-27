//
// chemacx-explorer.js
//
// Copyright (c) 2018 PerkinElmer, Inc. All rights reserved.

// ESLint configuration
/* global $, ChemDrawAPI */

function initialize() {
    ChemDrawAPI.window.resizeTo(400, 600);
    handleAddCompound('test', 2);
}
