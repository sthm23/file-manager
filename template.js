import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
let pathFolder = path.dirname(__filename);

export {path, os, fs, createHash, pathFolder};



