#!/bin/bash
if [ $# -lt 1 ]; then
   echo "Faltou utilizar pelo menos um argumento!"
   exit 1
fi

#global variables


# inputs
# -a ambiente
while getopts "a:" OPTION
do
   case $OPTION in
      a) ambiente="$OPTARG" 
         ;;
   esac
done
shift $((OPTIND-1))

export AMBIENTE=$ambiente

mocha --reporter mochawesome --reporter-options reportFilename='Report_'$ambiente