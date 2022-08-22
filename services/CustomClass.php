<?php

namespace app\services;

class CustomClass {
  public $foo = 'bar';

  public function print(string $msg = 'hello') {
    echo $msg . ' ' . $this->foo;
  }
}
