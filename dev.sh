#!/bin/bash

project=$1

if [ $project == "react" ];then
    cd react && npm i && npm run dev
elif [ $project == "angular" ];then
    cd angular && nvm install latest && nvm use latest && npm i && ng serve
elif [ $project == "deno" ];then
    cd deno && deno task start
else 
    echo "check you command again"
fi