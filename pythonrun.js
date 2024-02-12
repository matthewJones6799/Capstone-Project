import {PythonShell} from 'python-shell';

PythonShell.run('my_script.py', null).then(messages=>{
    console.log('finished');
});