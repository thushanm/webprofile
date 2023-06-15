--TEST--
Bug GH-9750 004 (Generator memory leak when interrupted during argument evaluation)
--FILE--
<?php

function f() {
}

class C {
    function __destruct() {
        echo __METHOD__, "\n";
    }
}

$gen = function ($c) use (&$gen) {
    f(new stdClass, $gen, yield);
};

$gen = $gen(new C());

foreach ($gen as $value) {
    break;
}

$gen = null;

gc_collect_cycles();

?>
==DONE==
--EXPECT--
C::__destruct
==DONE==
