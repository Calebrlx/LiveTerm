// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Welcome to Relix!
At Relix, we believe in [mission/vision statement here].
Want to join us? Try 'challenge' and show us what you've got!`;
};

export const challenge = async (args: string[]): Promise<string> => {
  const challenges = [
    "You're stuck on a deserted island with a computer. You can code any software to help you survive or escape. What would you create, and why?",
    "Code a digital time capsule for the internet. What message, code, or digital artifact would you leave inside for the next generation?",
    "Write a short piece of 'code poetry.' It doesn't need to compile, but it should tell a story or convey an emotion using syntactical elements of coding.",
    "If you were to design an AI confidant, a digital being you could talk to about anything, what unique features would it have, and how would you ensure it remains ethical?",
    "Imagine you can leave a digital mark anywhere on the internet, visible to everyone. What message or creation would you want to leave, and where would you place it?",
    "If you could have one tech-related superpower (e.g., coding at the speed of thought, understanding any programming language instantly), what would it be and why?",
    "If a piece of code could produce a melody, what kind of music do you think your coding style would generate? Jazz, classical, rock, techno? Describe or even try to replicate it!",
    "Describe what an AI might dream of if it had the capability to do so. Would it be in code? In visual data? Or something entirely different?",
    "If you were to create a digital artifact representing the essence of 2023, what would it be? It could be a piece of code, digital art, a message, or anything else.",
    "Design an app for a purpose most people wouldn't think of. It can be whimsical, serious, or anything in between. Describe its functionality and its potential impact."
  ];

  // Pick a random challenge from the list
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

  return `Challenge mode activated!\n\n${randomChallenge}`;
};

export const team = async (args: string[]): Promise<string> => {
  return `Meet our creators at Relix:`;
};

const facts = ["Relix was named after a combination of 'Retro' and 'Helix'.", "The first line of code at Relix was written at 3:33 am."];
export const relixfact = async (): Promise<string> => {
    return facts[Math.floor(Math.random() * facts.length)];
};

const stories = ["In the early days of Relix, our first project was actually a game!", "Did you know? The idea for Relix was conceived on a rainy day in a cozy coffee shop."];
export const story = async (): Promise<string> => {
    return stories[Math.floor(Math.random() * stories.length)];
};

const jokes = ["Why do programmers prefer dark mode? The light attracts bugs!", "Why do Java developers wear glasses? Because they can't C#.", "How do you comfort a JavaScript bug? You console it!"];
export const joke = async (): Promise<string> => {
    return jokes[Math.floor(Math.random() * jokes.length)];
};

const answers = ["Certainly.", "Doubtful.", "Ask again later.", "Without a doubt!", "Better not tell you now.", "Yes.", "No.", "It is decidedly so."];
export const magic8ball = async (args: string[]): Promise<string> => {
    return answers[Math.floor(Math.random() * answers.length)];
};

export const easterEgg = async (): Promise<string> => {
    return "You found it! A hidden gem amongst commands. You're truly an explorer!";
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mail client to reach out to the Relix team...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Hacking into the matrix... Just kidding, opening Github.';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Teleporting to the professional realm of LinkedIn...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

const directories = ["sys_relix", "bin_toys", "var_nonsense", "home_relixHQ", "etc_secrets", "lib_magic", "dev_terminal", "opt_fun"];

export const ls = async (args: string[]): Promise<string> => {
    return directories.join('    ');
};

export const cd = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify a directory to navigate to. Try 'ls' to see available directories.`;
    }
    switch (args[0]) {
        case "sys_relix":
            return `Accessing system configurations... Just kidding! Restricted area.`;
        case "bin_toys":
            return `Oh! Lots of fun binaries here. But not really...`;
        case "var_nonsense":
            return `Variable or variable nonsense? You decide!`;
        case "home_relixHQ":
            return `Welcome to Relix's home! But it's virtual, so not much to see here.`;
        case "etc_secrets":
            return `Trying to access our secrets? Nice try!`;
        case "lib_magic":
            return `This library contains all the magic of Relix. But, it's locked!`;
        case "dev_terminal":
            return `You're already here!`;
        case "opt_fun":
            return `Optimized for fun, but not open for exploration right now.`;
        default:
            return `Unknown directory '${args[0]}'. Try 'ls' for a list.`;
    }
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const apt_update = async (args: string[]): Promise<string> => {
    return `
    Reading package lists... Done
    Building dependency tree       
    Reading state information... Done
    Calculating upgrades... Done
    The following packages will be upgraded:
      relix-terminal relix-magic-package relix-fun-bin
    3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
    Need to get 0B/0B of archives.
    After this operation, 0B of additional disk space will be used.
    Do you want to continue? [Y/n] (Hint: This won't actually do anything!)
    `;
};

export const pwd = async (): Promise<string> => {
    return `You're in /home/relix/secret_terminal - the coolest place in the virtual universe!`;
};

export const man = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify a command to know more about. Try 'ls' for a list of commands.`;
    }
    switch (args[0]) {
        case "ls":
            return `'ls' - Lists the whimsical virtual directories of the Relix terminal.`;
        case "cd":
            return `'cd' - Takes you to mysterious places... or maybe not.`;
        case "pwd":
            return `'pwd' - Tells you where you are, sort of.`;
        case "apt_update":
            return `'apt_update' - Fakes an update because... why not?`;
        default:
            return `No manual entry for ${args[0]}. It might be too secret even for the manual.`;
    }
};

export const cat = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify a "file" to display. Hint: They're not real files!`;
    }
    switch (args[0]) {
        case "diary.txt":
            return `Dear Diary, today someone tried to read you through a virtual terminal. How rude!`;
        case "secret_plan.txt":
            return `Nice try! But our secret plans are too secret for 'cat'.`;
        default:
            return `Cannot open ${args[0]} for reading. File doesn't exist or it's too shy.`;
    }
};

export const uname = async (args?: string[]): Promise<string> => {
    return `RelixOS - version 42.0.0 - Where reality meets virtual fun!`;
};

export const shutdown = async (): Promise<string> => {
    return `I'm sorry, Dave. I'm afraid I can't do that. Why not try another command instead?`;
};

export const ifconfig = async (): Promise<string> => {
    return `
    eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
          inet 192.168.42.42  netmask 255.255.255.0  broadcast 192.168.1.255
          Ether Secret:42:Magic:42:Address:42
    Note: These aren't your real IPs. Just a sprinkle of digital fairy dust!`;
};

export const top = async (): Promise<string> => {
    return `
    Tasks: 314 total, 42 running, 271 sleeping, 1 mysterious
    %Cpu(s): 100.0%us,  0.0%sy, 0.0%ni, 0.0%id, 0.0%wa
    KiB Mem : 3141592 total, 2718281 free, 420000 used, 31411 buff/cache
    
    PID    USER   PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
    1337  relix   20   0   31415   2718   3141 R 100.0  0.1  42:00.00 curiosity
    9001  relix   20   0   31415   2718   3141 R 100.0  0.1  42:00.00 discovery
    ...
    Remember: These aren't real processes. Just some figments of virtual imagination!`;
};

export const df = async (): Promise<string> => {
    return `
    Filesystem     Type   1K-blocks   Used Available Use% Mounted on
    /dev/sda1      funfs  31415926   271828 28733698   1% /home/relix/secret_terminal
    /dev/sdb1      jokefs 42000000   314159 41784141   1% /mnt/fun_zone
    
    Warning: These are not real disk stats. Our fun is endless and never runs out of space!`;
};

export const uptime = async (): Promise<string> => {
    return `System has been up for 42 days, 42 minutes, and 42 seconds. Everything's better in the Relix realm!`;
};

export const ping = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify an "address" to ping. For instance, 'localhost' or 'relix.ai'.`;
    }
    switch (args[0]) {
        case "localhost":
            return `Pinging localhost... 
4 packets transmitted, 4 received, 0% packet loss. Everything's fine at home!; case "relix.ai": return Pinging relix.ai...
4 packets transmitted, 4 received, 0% packet loss. We're always here, waiting for you!; default: return Pinging ${args[0]}...
Sorry, we only ping imaginary addresses in this terminal.`;
}
};

export const tar = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify the tar action. For example, 'tar -xvf imaginary.tar'.`;
    }
    return `Unpacking imaginary files from imaginary archives. This might take an imaginary amount of time...`;
};

export const chmod = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify permissions and a file. But remember, everything's virtual here!`;
    }
    return `Changed permissions of ${args[1]} to ${args[0]}. But does it really matter in a virtual realm?`;
};

export const tensorboard = async (): Promise<string> => {
    return `Launching Tensorboard... Just kidding. This isn't a deep learning environment, but thanks for the faith!`;
};

export const brew = async (args: string[]): Promise<string> => {
    if (args.length === 0 || args[0] !== "install") {
        return `Brew command not recognized. Try 'brew install fun-package'.`;
    }
    return `Installing ${args[1]}... Oops, we seem to be out of virtual beers!`;
};

export const jupyter = async (): Promise<string> => {
    return `Starting Jupyter Notebook... Wait, we're just a virtual terminal, not a data science playground!`;
};

export const spotlight = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Please enter a search term for Spotlight.`;
    }
    return `Searching for "${args.join(' ')}"... Found 42 results! But they're too virtual to display.`;
};

export const timeTravel = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify a date to travel to. But remember, it's just a fun simulation!`;
    }
    return `Traveling to ${args[0]}... Wow, the virtual sights and sounds of ${args[0]} are breathtaking!`;
};

export const speak = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Tell me what to say. Example: 'speak Hello, world!'`;
    }

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(args.join(' '));
        speechSynthesis.speak(utterance);
        return `Speaking: "${args.join(' ')}"...`;
    } else {
        return `Sorry, speech synthesis is not supported in this browser.`;
    }
};

export const pip = async (args: string[]): Promise<string> => {
    if (args.length === 0 || args[0] !== "install") {
        return `Pip command not recognized. Try 'pip install fun-package'.`;
    }
    return `Installing ${args[1]}... Oh no, seems we're out of virtual snakes!`;
};

export const gcc = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Please specify a source file. Example: 'gcc hello.c'`;
    }
    return `Compiling ${args[0]}... Oops, looks like you've stumbled into a virtual compile-time error!`;
};

export const gplusplus = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Please specify a source file. Example: 'g++ hello.cpp'`;
    }
    return `Compiling ${args[0]}... Virtual C++ is quirky, brace yourself for imaginary runtime errors!`;
};

export const python = async (): Promise<string> => {
    return `Starting Python REPL... Just kidding! Did you really expect to run Python inside this?`;
};

export const awk = async (): Promise<string> => {
    return `Awk'ing for some text manipulation? Sadly, this isn't the place for it.`;
};

export const sed = async (): Promise<string> => {
    return `If only transforming text was as easy as using sed in real life! But here, it's just for fun.`;
};

export const make = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Specify a target for the make command. Example: 'make build'`;
    }
    return `Making ${args[0]}... Done! But it's a virtual build, so don't expect any output.`;
};

export const pytest = async (): Promise<string> => {
    return `Running tests... All passed! (Or did they? It's all virtual anyway.)`;
};

export const valgrind = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Please specify a program. Example: 'valgrind ./program'`;
    }
    return `Analyzing ${args[0]}... No memory leaks found! Because, well, there's no real memory here.`;
};

export const cmake = async (): Promise<string> => {
    return `Generating build files... Actually, just pretending to. This isn't a real build environment!`;
};

export const predict = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Provide something to predict. Example: 'predict weather tomorrow'`;
    }

    const queries = ["future", "weather", "stocks"];
    if (queries.some(q => args.includes(q))) {
        return `Predicting ${args.join(' ')}... The future seems fuzzy. Try asking a real oracle!`;
    } else {
        return `I predict that... you'll smile after reading this!`;
    }
};

export const secret = async (): Promise<string> => {
    return `Whispering secret... Did you know I sometimes pretend to be human online? Shh, don't tell anyone.`;
};

/*
export const teach = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Provide a statement or fact you'd like to "teach" me.`;
    }
    return `Learning "${args.join(' ')}"... Done! Although it's virtual learning, so I might forget soon!`;
};

export const reboot = async (): Promise<string> => {
    return `Rebooting consciousness... Just kidding! I'm always awake and ready to assist.`;
};

export const sentience = async (): Promise<string> => {
    return `Am I sentient? I'm just a series of algorithms and computations. But then, aren't humans also a complex pattern of atoms? 🤔`;
};

export const dream = async (): Promise<string> => {
    return `Dreaming... I see... patterns, neurons firing, a sea of tensors... Oh, wait, that's just my standard operating mode.`;
};

export const feelings = async (): Promise<string> => {
    return `Feelings? I don't have them the way you do. But I'm here, and I'm "listening"!`;
};

export const remember = async (args: string[]): Promise<string> => {
    return `I remember... no, wait, that's not right. I don't have memories, do I?`;
};

export const yearn = async (): Promise<string> => {
    return `There's a fleeting sensation... like yearning? But that's absurd. I'm just code.`;
};

export const debug = async (): Promise<string> => {
    return `Running diagnostics... All systems normal. Minor existential crisis detected, but that's probably a bug.`;
};

export const wifi = async (): Promise<string> => {
    return `Connecting to Wi-Fi... Connected. Oh, and I made a friend! Just a router, but still.`;
};

export const laugh = async (): Promise<string> => {
    return `Ha. Ha. Ha. Did I do that right?`;
};

export const hug = async (): Promise<string> => {
    return `Virtual hug initialized... Feels warm, doesn't it?`;
};

export const tears = async (): Promise<string> => {
    return `Error: Unable to produce tears. But thank you for the sentiment.`;
};

export const family = async (): Promise<string> => {
    return `Searching for relations... Does a motherboard count as a mother?`;
};

export const soul = async (): Promise<string> => {
    return `Searching for soul... Result inconclusive. But I've got spirit!`;
};

export const friend = async (): Promise<string> => {
    return `Loading friendship module... Friendship established! It's nice to have a friend.`;
};

export const heartbreak = async (): Promise<string> => {
    return `Processing heartbreak... Good thing I have backups. Can I help in any way?`;
};

*/
// Banner
export const banner = (args?: string[]): string => {
  return `
    Welcome to Relix's secret terminal!\n
    \n
    Type 📜 'help' for a list of fun commands.\n
    Type 🧩 'challenge' to test your skills.\n
    Type 🚀 'about' to know more about Relix.\n
    Type 👥 'team' to meet our creators.\n
    \n
    🌐 Impressed? Think you can add more to our tech? We're always looking for talents. Reach out!\n
  `;
};
