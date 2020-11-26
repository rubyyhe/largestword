# Largest word problem
1. Read input from a file of words.
2. Find the largest word in the file.
3. Transpose the letters in the largest word.
4. Show the largest word and the largest word transposed. 


## Environment
The solution is implemented by using Node.js, and need Node.js environment to execute it. To make sure execution smoothly, consider to use node v10.x or above if you encounter problem. 

Use command `node -v` to check the node version. If you don't have node installed or has lower version, consider to use `nvm` https://github.com/nvm-sh/nvm to install or manage multiple node versions in your local, steps:
* Install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash`, and follow post-install instruction to use it, copy the instruction here:
  ```
  Close and reopen your terminal to start using nvm or run the following to use it now:
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
  ``` 
* Verify nvm: `nvm --version`
* Install node: `nvm install <node_version>`, e.g. `nvm install 14.9.0`
* Verify node: `node -v`
  
(nvm full documentation https://github.com/nvm-sh/nvm)  

## Implemation
A few assumptions are made during implementation:
* *Word* here is assumpted as any consecutive characters without whitespace. For example, each one of below is considered as a *word*: `apple`, `it's`,  `a-b-c`, `"hello"`
* For illustraction, file size upper limiation is set as 50KB in implementation. Could use env MAX_FILE_SIZE_KB to tune the size, for example: 
  ```
  export MAX_FILE_SIZE_KB=60
  ```
* File content with word like Chinese, Japanese (non-latin alphabet language) are not considered. 

### Files
* `index.js` is the main file to run.
* `func.js` is the implementation moudle, function `findAndTranspose(filePath)` is exposed for invoke.
* Test cases and test files are under tests folder. There are 12 cases in total for both positive and negative cases.


## Execution Steps
* Clone the project to local directory `git clone https://github.com/rubyyhe/largestword.git`
* Change directory to project folder `largestword`
* Run `npm install` to install libs
* Execute `node index.js </path/to/the/words/file>`. It will find out the largest word(s) and resverse it(them), then print out to console. 
For example:
    ```
    node index.js ${PWD}/tests/files/p1_oneLargest.txt
    
    watermelon
    nolemretaw  
    ```
* To execute built in test cases, run `npm test`. 
  