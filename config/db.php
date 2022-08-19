<?php

return [
  'class' => 'yii\db\Connection',
  'dsn' => "{$_ENV['DB_DRIVER']}:host={$_ENV['DB_HOST']};dbname={$_ENV['DB_NAME']}",
  'username' => $_ENV['DB_USER'],
  'password' => $_ENV['DB_PASSWORD'],
  'charset' => 'utf8',

  // Schema cache options (for production environment)
  //'enableSchemaCache' => true,
  //'schemaCacheDuration' => 60,
  //'schemaCache' => 'cache',
];
