--TEST--
GH-10715 (phpdbg heap buffer overflow -- by misuse of the option "--run")
--PHPDBG--
r
q
--EXPECTF--
[Successful compilation of %s]
prompt> [Script ended normally]
prompt>
--FILE--
 
