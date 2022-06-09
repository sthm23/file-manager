import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import fs_main from 'fs';

const __filename = fileURLToPath(import.meta.url);

export {path, os, fs, createHash, __filename , fs_main};



