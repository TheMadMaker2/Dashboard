#!/bin/bash
json=/home/r2r0m0c0/Projects/Dashboard/public/status.json
test(){
  if [[ $(curl "$1") ]]; then
    echo "yay"
    cat $json | jq "$2" --arg v 'Active' | sponge $json
  else
    cat $json | jq "$2" --arg v 'Inactive' | sponge $json 
  fi
}
test "http://192.168.99.40:32400" '.PLEX = $v'
test "http://192.168.99.40:7878" '.RADARR = $v'
test "http://192.168.99.40:8989" '.SONARR = $v'
# test "http://192.168.99.40:9117" '.JACKETT = $v'
test "http://192.168.99.40:8081" '.QBITVPN = $v'
test "http://192.168.99.40:8082" '.QBIT = $v'


test "https://www.tmmworkshop.com/" '.WEBSITE = $v'
test "192.168.99.40:25565" '.MINECRAFT = $v'

test "pfsense.tmmworkshop.com" '.PFSENSE = $v'
test "unifi.tmmworkshop.com" '.UNIFI = $v'

