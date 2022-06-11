# file-manager



## The program is started by npm-script start in following way:

- npm run start -- --username=your_username

## instruction commands

- help

## Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)

- up

## Go to dedicated folder from current directory (path_to_directory can be relative or absolute)

- cd path_to_directory

## List all files and folder in current directory and print it to console

- ls

## Read file and print it's content in console

- cat path_to_file

## Create empty file in current working directory

- add new_file_name

## Rename file

- rn path_to_file new_filename

## Copy file (first arg is fileName, second arg is path where you want to copy file)

- cp path_to_file path_to_new_directory

## Move file (same as copy but initial file is deleted)(first arg is fileName, second arg is path where you want to copy file)

- mv path_to_file path_to_new_directory

## Delete file

- rm path_to_file

## Get EOL (default system End-Of-Line)

- os --EOL

## Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)

- os --cpus

## Get home directory:

- os --homedir

## Get current system user name (Do not confuse with the username that is set when the application starts)

- os --username

## Get CPU architecture for which Node.js binary has compiled

- os --architecture

## Calculate hash for file and print it into console

- hash path_to_file

## Compress file (using Brotli algorytm)

- compress path_to_file path_to_destination

## Decompress file (using Brotli algorytm)

- decompress path_to_file path_to_destination