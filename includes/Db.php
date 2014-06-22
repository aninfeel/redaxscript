<?php

/**
 * children class to handle the database
 *
 * @since 2.2.0
 *
 * @package Redaxscript
 * @category Db
 * @author Henry Ruhs
 */

class Redaxscript_Db extends ORM
{
	/**
	 * connect to database
	 *
	 * @since 2.2.0
	 *
	 * @param Redaxscript_Registry $registry instance of the registry class
	 * @param Redaxscript_Config $config instance of the config class
	 */

	public static function connect(Redaxscript_Registry $registry, Redaxscript_Config $config)
	{
		/* try to connect */

		try
		{
			/* mysql */

			if ($config::get('type') === 'mysql')
			{
				self::configure(array(
						'connection_string' => 'mysql:host=' . $config::get('host') . ';dbname=' . $config::get('name'),
						'username' => $config::get('user'),
						'password' => $config::get('password'),
						'driver_options' => array(
							PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
						)
					)
				);
			}
			self::configure(array(
				'return_result_sets', true,
				'caching', true
			));
			$registry->set('dbConnected', true);
			$registry->set('dbError', false);
		}

		/* handle exception */

		catch (PDOException $exception)
		{
			$registry->set('dbConnected', false);
			$registry->set('dbError', true);
		}
	}

	/**
	 * tweaked magic method to capture calls
	 *
	 * @since 2.2.0
	 *
	 * @param string $name name of the method
	 * @param string $arguments arguments of the method
	 *
	 * @return Redaxscript_Db
	 */

	public static function __callStatic($name = null, $arguments = null)
	{
		$method = strtolower(preg_replace('/([a-z])([A-Z])/', '$1_$2', $name));
		return call_user_func_array(array(get_called_class(), $method), $arguments);
	}

	/**
	 * for table with prefix
	 *
	 * @since 2.2.0
	 *
	 * @param string $table_name name of the table
	 * @param string $connection_name which connection to use
	 *
	 * @return Redaxscript_Db
	 */

	public static function for_prefix_table($table_name = null, $connection_name = self::DEFAULT_CONNECTION)
	{
		self::_setup_db($connection_name);
		return new self(Redaxscript_Config::get('prefix') . $table_name, array(), $connection_name);
	}
}
