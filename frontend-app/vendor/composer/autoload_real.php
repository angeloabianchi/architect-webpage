<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitea475b36af9c4cc8c32976bc54a2d331
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitea475b36af9c4cc8c32976bc54a2d331', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitea475b36af9c4cc8c32976bc54a2d331', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitea475b36af9c4cc8c32976bc54a2d331::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
