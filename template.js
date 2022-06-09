import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import fs_main from 'fs';
import {pipeline} from 'stream';
import {createBrotliCompress, createBrotliDecompress} from 'zlib';

import { welcome } from './cli/welcome.js';
import { nextPath } from "./nwd/nextFolder.js";
import { prevPath } from "./nwd/prevFolder.js";
import { showContent } from "./nwd/list.js";
import {showFileContent} from './fs/readFile.js';
import {createFile} from './fs/create.js';
import {changeName} from './fs/changeName.js';
import { copyDirectory } from './fs/copy.js';
import { movePath } from './fs/moveFile.js';
import { deleteFile } from './fs/remove.js';
import {calculateHash} from './hash/calcHash.js';
import {checkCpus} from './os/checkCpus.js';
import {checkEOL} from './os/checkEOL.js';
import {checkProcessor} from './os/checkProcess.js';
import {homeDir} from './os/homeDir.js';
import {checkUserName} from './os/username.js';
import { compressFile } from './zip/compress.js';
import {decompressFile} from './zip/decompress.js';

const __filename = fileURLToPath(import.meta.url);

export {path, os, fs, createHash, __filename , fs_main, welcome,
  nextPath, prevPath, showContent, showFileContent, createFile, changeName, 
  copyDirectory, movePath, deleteFile, calculateHash, checkCpus, checkEOL,
  checkProcessor, homeDir, checkUserName, createBrotliCompress, createBrotliDecompress, 
  pipeline, compressFile, decompressFile
};