<?php
/**
*
* @package MODX creator
* @version $Id$
* @copyright (c) 2009 phpBB Group
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/

/**
* @ignore
*/
if(!defined('IN_PHPBB'))
{
	exit;
}

/**
* write_element()
*
* Writes a XML element with attributes
* @param object $xml
* @param string $name
* @param string $text
* @param array $attributes
*/
function write_element($name, $text, $attributes = false, $cdata = true)
{
	global $xml;

	if($text == '' && $attributes == false)
	{
		// nothing to write
		return;
	}

/**
 * This doesn't work as intended.
 * I'll comment it for now and return later.
	if(!version_compare(PHP_VERSION, '6.0.0-dev', '>=') && get_magic_quotes_gpc())
	{
		$text = stripslashes($text);
	}
*/

	$xml->startElement($name);
	if($attributes != false)
	{
		foreach($attributes as $key => $value)
		{
			if($value != '')
			{
				$xml->writeAttribute($key, $value);
			}
		}
	}
	if($text != '')
	{
		if($cdata)
		{
			$xml->writeCdata($text);
		}
		else
		{
			$xml->text($text);
		}
	}
	$xml->endElement();
}

/**
* count_rows()
*
* Counts the number of rows needed for <textarea>'s
* @param string $string, the string to count
* @param int $len, the number of chars per row
* @param int $min, the minimum rows to return
* @return int
*/
function count_rows($string, $len, $max = 20, $min = 4)
{
	$arr = explode("\n", $string);
	$rows = count($arr);
	foreach($arr as $value)
	{
		$str_len = strlen($value);
		if($str_len > $len)
		{
			$sum = ceil($str_len / $len) -1;
			$rows += $sum;
		}
	}
	$rows = ($rows <= $min) ? $min : $rows;
	$rows = ($rows >= $max) ? $max : $rows;
	return($rows);
}

/**
 * sanitize_inlines()
 *
 * Remove newlines from inline edits and finds.
 * @param $data, the inline string to sanitize.
 */
function sanitize_inlines(&$data)
{
	// On some systems \r comes before \n and I bet some systems only uses \r
	$data = str_replace("\r", "\n", $data);
	if ($pos = strpos($data, "\n") !== false)
	{
		$data = substr($data, 0, $pos);
	}
}

/**
* gen_value()
*
* runs $data trought htmlspecialchars(). It's in a function to save code
* @param string $data, the string to do things to
* @param bool $trim, true = trim() $data
* @return string
*/
function gen_value(&$data, $trim = false)
{
	$data = ($trim) ? trim($data) : $data;
	$data = htmlspecialchars($data);
	return($data);
}

/**
* get_mod_type()
*
* Checks and returns the type of the uploaded file
* @param string $str, the 100 first bytes from the file
* @param string $extension, the file extension.
* @return int (or bool on error)
*/
function get_mod_type($str, $extension)
{
	$extension = strtolower($extension);
	if($extension == 'xml')
	{
		// It's trying to be a MODX file, so we'll check for <?xml in the file
		if(strpos($str, '<?xml') !== false)
		{
			return(MODX);
		}
	}
	else if($extension == 'txt' || $extension == 'mod')
	{
		$str = strtolower($str);
		// The file is trying to tell us it's a MOD file
		if((substr($str, 0, 10) == '##########' || strpos($str, 'easymod') !== false) && strpos($str, 'mod') !== false)
		{
			return(MOD);
		}
	}
	return(false);
}

/**
* Make options for the language-select with the selected language set.
*
* @param string $lang, the language that should be selected as default
* @return string, the language select
*/
function lang_select($lang = 'en')
{
	global $user;
	$target_lang = array(
		'ab' => $user->lang['ABKHAZIAN'],
		'aa' => $user->lang['AFAR'],
		'af' => $user->lang['AFRIKAANS'],
		'sq' => $user->lang['ALBANIAN'],
		'am' => $user->lang['AMHARIC'],
		'ar' => $user->lang['ARABIC'],
		'hy' => $user->lang['ARMENIAN'],
		'as' => $user->lang['ASSAMESE'],
		'ay' => $user->lang['AYMARA'],
		'az' => $user->lang['AZERBAIJANI'],
		'ba' => $user->lang['BASHKIR'],
		'eu' => $user->lang['BASQUE'],
		'bn' => $user->lang['BENGALI'],
		'dz' => $user->lang['BHUTANI'],
		'bh' => $user->lang['BIHARI'],
		'bi' => $user->lang['BISLAMA'],
		'br' => $user->lang['BRETON'],
		'bg' => $user->lang['BULGARIAN'],
		'my' => $user->lang['BURMESE'],
		'be' => $user->lang['BYELORUSSIAN'],
		'km' => $user->lang['CAMBODIAN'],
		'ca' => $user->lang['CATALAN'],
		'zh' => $user->lang['CHINESE'],
		'co' => $user->lang['CORSICAN'],
		'hr' => $user->lang['CROATIAN'],
		'cs' => $user->lang['CZECH'],
		'da' => $user->lang['DANISH'],
		'nl' => $user->lang['DUTCH'],
		'en' => $user->lang['ENGLISH'],
		'eo' => $user->lang['ESPERANTO'],
		'et' => $user->lang['ESTONIAN'],
		'fo' => $user->lang['FAEROESE'],
		'fj' => $user->lang['FIJI'],
		'fi' => $user->lang['FINNISH'],
		'fr' => $user->lang['FRENCH'],
		'fy' => $user->lang['FRISIAN'],
		'gl' => $user->lang['GALICIAN'],
		'ka' => $user->lang['GEORGIAN'],
		'de' => $user->lang['GERMAN'],
		'el' => $user->lang['GREEK'],
		'kl' => $user->lang['GREENLANDIC'],
		'gn' => $user->lang['GUARANI'],
		'gu' => $user->lang['GUJARATI'],
		'ha' => $user->lang['HAUSA'],
		'iw' => $user->lang['HEBREW'],
		'hi' => $user->lang['HINDI'],
		'hu' => $user->lang['HUNGARIAN'],
		'is' => $user->lang['ICELANDIC'],
		'in' => $user->lang['INDONESIAN'],
		'ia' => $user->lang['INTERLINGUA'],
		'ik' => $user->lang['INUPIAK'],
		'ga' => $user->lang['IRISH'],
		'it' => $user->lang['ITALIAN'],
		'ja' => $user->lang['JAPANESE'],
		'jw' => $user->lang['JAVANESE'],
		'kn' => $user->lang['KANNADA'],
		'ks' => $user->lang['KASHMIRI'],
		'kk' => $user->lang['KAZAKH'],
		'rw' => $user->lang['KINYARWANDA'],
		'ky' => $user->lang['KIRGHIZ'],
		'rn' => $user->lang['KIRUNDI'],
		'ko' => $user->lang['KOREAN'],
		'ku' => $user->lang['KURDISH'],
		'lo' => $user->lang['LAOTHIAN'],
		'la' => $user->lang['LATIN'],
		'lv' => $user->lang['LETTISH'],
		'ln' => $user->lang['LINGALA'],
		'lt' => $user->lang['LITHUANIAN'],
		'mk' => $user->lang['MACEDONIAN'],
		'mg' => $user->lang['MALAGASY'],
		'ms' => $user->lang['MALAY'],
		'ml' => $user->lang['MALAYALAM'],
		'mt' => $user->lang['MALTESE'],
		'mi' => $user->lang['MAORI'],
		'mr' => $user->lang['MARATHI'],
		'mo' => $user->lang['MOLDAVIAN'],
		'mn' => $user->lang['MONGOLIAN'],
		'na' => $user->lang['NAURU'],
		'ne' => $user->lang['NEPALI'],
		'no' => $user->lang['NORWEGIAN'],
		'oc' => $user->lang['OCCITAN'],
		'or' => $user->lang['ORIYA'],
		'om' => $user->lang['OROMO'],
		'ps' => $user->lang['PASHTO'],
		'fa' => $user->lang['PERSIAN'],
		'pl' => $user->lang['POLISH'],
		'pt' => $user->lang['PORTUGUESE'],
		'pa' => $user->lang['PUNJABI'],
		'qu' => $user->lang['QUECHUA'],
		'rm' => $user->lang['RHAETO_ROMANCE'],
		'ro' => $user->lang['ROMANIAN'],
		'ru' => $user->lang['RUSSIAN'],
		'sm' => $user->lang['SAMOAN'],
		'sg' => $user->lang['SANGRO'],
		'sa' => $user->lang['SANSKRIT'],
		'gd' => $user->lang['SCOTS_GAELIC'],
		'sr' => $user->lang['SERBIAN'],
		'sh' => $user->lang['SERBO_CROATIAN'],
		'st' => $user->lang['SESOTHO'],
		'tn' => $user->lang['SETSWANA'],
		'sn' => $user->lang['SHONA'],
		'sd' => $user->lang['SINDHI'],
		'si' => $user->lang['SINGHALESE'],
		'ss' => $user->lang['SISWATI'],
		'sk' => $user->lang['SLOVAK'],
		'sl' => $user->lang['SLOVENIAN'],
		'so' => $user->lang['SOMALI'],
		'es' => $user->lang['SPANISH'],
		'su' => $user->lang['SUDANESE'],
		'sw' => $user->lang['SWAHILI'],
		'sv' => $user->lang['SWEDISH'],
		'tl' => $user->lang['TAGALOG'],
		'tg' => $user->lang['TAJIK'],
		'ta' => $user->lang['TAMIL'],
		'tt' => $user->lang['TATAR'],
		'te' => $user->lang['TEGULU'],
		'th' => $user->lang['THAI'],
		'bo' => $user->lang['TIBETAN'],
		'ti' => $user->lang['TIGRINYA'],
		'to' => $user->lang['TONGA'],
		'ts' => $user->lang['TSONGA'],
		'tr' => $user->lang['TURKISH'],
		'tk' => $user->lang['TURKMEN'],
		'tw' => $user->lang['TWI'],
		'uk' => $user->lang['UKRAINIAN'],
		'ur' => $user->lang['URDU'],
		'uz' => $user->lang['UZBEK'],
		'vi' => $user->lang['VIETNAMESE'],
		'vo' => $user->lang['VOLAPUK'],
		'cy' => $user->lang['WELSH'],
		'wo' => $user->lang['WOLOF'],
		'xh' => $user->lang['XHOSA'],
		'ji' => $user->lang['YIDDISH'],
		'yo' => $user->lang['YORUBA'],
		'zu' => $user->lang['ZULU'],
	);

	// What language are we gonna use
	$lang = trim($lang);
	$lang = (isset($lang[$target_lang])) ? $lang : 'en';
	$language_options = '';
	foreach($target_lang as $key => $value)
	{
		$language_options .= '<option value="' . $key . '"' . (($key == $lang) ? ' selected="selected"' : '') . '>' . $value . '</option>';
	}
	return($language_options);
}

?>
