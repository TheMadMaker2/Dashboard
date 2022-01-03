#!/bin/bash
json=status.json
if [[ $(curl 192.168.99.40:32400 | grep "Unauthorized") -eq 0 ]] then
cat $json | jq '.PLEX = $v' --arg v 'Active' | sponge $json
else
cat $json | jq '.PLEX = $v' --arg v 'IActive' | sponge $json 
fi