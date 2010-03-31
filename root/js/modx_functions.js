/**
* JavaScript for modx-creator
*/

var field_cnt = 1;
var file_cnt = 1;
var edit_cnt = 1;
var dl_cnt = 1;
var dt_cnt = 1;
var dd_cnt = 1;

/**
* Change the input type depending on what is selected
*/
function get_select_change(value, dt_id, dd_id, file_name, dl5_id)
{
	var data_type = 0;
	var row_count;
	var info_img = '';
	var tmp_data = '';
	var tmp_id = dd_id + '_data';

	// Remove the datafield so that we can change to the one we want
	if (document.getElementById(dd_id + '_field'))
	{
		if(document.getElementById(dd_id + '_data').value)
		{
			tmp_data = document.getElementById(dd_id + '_data').value;
		}
		$('#' + dd_id + '_field').remove();
	}
	if($('#' + dd_id + '_info'))
	{
		$('#' + dd_id + '_info').remove();
	}

	if($('#' + dd_id + '_toolbox'))
	{
		$('#' + dd_id + '_toolbox').remove();
	}

	if($('#' + dd_id + '_delete_tool'))
	{
		$('#' + dd_id + '_delete_tool').remove();
	}


	switch(value)
	{
		case 'find':
			data_type = 1;
			info_img = '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['FIND_EXPLAIN'] + '" />';
		break;

		case 'remove':
			data_type = 1;
			info_img = '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['FIND_DELETE_EXPLAIN'] + '" />';
		break;

		case 'after-add':
		case 'before-add':
		case 'replace-with':
		case 'operation':
			data_type = 1;
			info_img = '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['ACTION_EXPLAIN'] + '" />';
		break;

		case 'inline-find':
		case 'inline-remove':
		case 'inline-after-add':
		case 'inline-before-add':
		case 'inline-replace-with':
		case 'inline-operation':
			data_type = 2;
			info_img = '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['INLINE_EXPLAIN'] + '" />';
		break;

		default:
			data_type = 3;
			info_img = '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['COMMENT_EXPLAIN'] + '" />';
		break;
	}

	switch(data_type)
	{
		case 1:
			var element = '<div id="' + dd_id + '_field">';
				element += '<textarea class="inputbox right-tools" id="' + dd_id + '_data" name="' + file_name + '[data]" rows="' + count_rows(tmp_data, 85, 20, 4) + '">' + tmp_data + '</textarea>';
				element += '<div class="right-tools" id="' + dd_id + '_toolbox">';
					element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl5_id + '\').remove()" />';
					element += '<img id="' + dd_id + '-plus" class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].' + dd_id + '_data.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
					element += '<img id="' + dd_id + '-minus" class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].' + dd_id + '_data.rows>7){document.forms[\'modxform\'].' + dd_id + '_data.rows-=4}else{document.forms[\'modxform\'].' + dd_id + '_data.rows-=(document.forms[\'modxform\'].' + dd_id + '_data.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
				element += '</div>';
			element += '</div>';
		break;

		case 2:
			var element = '<span id="' + dd_id + '_field">';
				element += '<textarea class="inputbox" id="' + dd_id + '_data" name="' + file_name + '[data]" rows="1" onKeypress="if((event.keyCode == 10) || (event.keyCode == 13)){return false;}">' + tmp_data + '</textarea>';
				element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl5_id + '\').remove()" />';
			element += '</span>';
		break;

		default:
			var element = '<div id="' + dd_id + '_field">';
				element += '<textarea class="inputbox right-tools" id="' + dd_id + '_data" name="' + file_name + '[data]" rows="' + count_rows(tmp_data, 70, 20, 4) + '">' + tmp_data + '</textarea>';
				element += '<div class="right-tools" id="' + dd_id + '_toolbox">';
					element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl5_id + '\').remove()" />';
					element += '<img id="' + dd_id + '-plus" class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].' + dd_id + '_data.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
					element += '<img id="' + dd_id + '-minus" class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].' + dd_id + '_data.rows>7){document.forms[\'modxform\'].' + dd_id + '_data.rows-=4}else{document.forms[\'modxform\'].' + dd_id + '_data.rows-=(document.forms[\'modxform\'].' + dd_id + '_data.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
				element += '</div>';
				element += '<br style="clear:both" /><span id="' + dd_id + '_lang">' + lang_select(file_name + '[lang]') + '</span>';
			element += '</div>';
		break;
	}

	$('#' + dd_id).append(element);
	$('#' + dt_id + '_options').append(info_img);
}

/**
* Generate new fields for the actions
*/
function modx_add_field(obj_id, parent_id, sort, position, if_edit)
{
	var edit_id = 'e_' + edit_cnt++;
	var dl_id = 'edl_' + dl_cnt++;
	var dd_id = 'edd_' + dd_cnt++;
	var dt_id = 'edt_' + dt_cnt++;
	var new_edit = (if_edit) ? '[' + edit_id + ']' : '';

	if(sort == 'edit')
	{
		var element = '<fieldset class="modx-level2" id="' + edit_id + '">';
			element += '<legend class="sub-legend"> ' + lang['EDIT'];
				element += ' <img class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['EDIT_EXPLAIN'] + '" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + edit_id + '\').remove()" /> ';
				element += '<button type="button" class="button1" onclick="modx_add_field(\'' + obj_id + '\', \'' + edit_id + '\', \'edit\', \'above\', 1)">' + lang['EDIT_ADD_ABOVE'] + '</button> ';
				element += '<button type="button" class="button1" onclick="modx_add_field(\'' + obj_id + '\', \'' + edit_id + '\', \'edit\', \'below\', 1)">' + lang['EDIT_ADD_BELOW'] + '</button>';
			element += ' <strong>' + lang['EDIT_FIND_EXPLAIN'] + '</strong></legend>';
			element += '<p style="font-size: 1em;">' + lang['EDIT_NOTE'] + '</p>';
			element += '<dl id="' + dl_id + '">';
				element += '<dt id="' + dt_id + '">';
					element += '<label>' + lang['TYPE'] + ': </label>';
					element += '<span>' + modx_select(obj_id + '[' + edit_id + '][' + dl_id + ']', dt_id, dd_id, dl_id) + '</span>';
					element += '<div id="' + dt_id + '_options" style="margin-top: 5px">';
						element += '<img class="action-image" src="' + image_path + 'modx_plus_up.png" alt="' + lang['ADD_FIELD_ABOVE'] + '" onclick="modx_add_field(\'' + obj_id + new_edit + '\', \'' + dl_id + '\', \'dl\', \'above\', 0);" title="' + lang['ADD_FIELD_ABOVE_EXPLAIN'] + '" /> ';
						element += '<img class="action-image" src="' + image_path + 'modx_plus_down.png" alt="' + lang['ADD_FIELD_BELOW'] + '" onclick="modx_add_field(\'' + obj_id + new_edit + '\', \'' + dl_id + '\', \'dl\', \'below\', 0);" title="' + lang['ADD_FIELD_BELOW_EXPLAIN'] + '" /> ';
						element += '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['SELECT_TYPE_EXPLAIN'] + '" />';
					element += '</div>';
				element += '</dt>';
				element += '<dd id="' + dd_id + '">';
					element += '<span id="' + dd_id + '_field">';
						element += '<input class="inputbox autowidth" id="' + dd_id + '_data" type="text" name="' + obj_id + new_edit + '[' + dl_id + '][data]" disabled="disabled" size="30" value="" />';
					element += '</span>';
					element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl_id + '\').remove()" />';
				element += '</dd>';
			element += '</dl>';
		element += '</fieldset>';
	}
	else
	{
		var element = '<dl id="' + dl_id + '" class="modx-edit">';
			element += '<dt id="' + dt_id + '">';
				element += '<label>' + lang['TYPE'] + ': </label>';
				element += '<span>' + modx_select(obj_id + '[' + dl_id + ']', dt_id, dd_id, dl_id) + '</span>';
				element += '<div id="' + dt_id + '_options" style="margin-top: 5px">';
					element += '<img class="action-image" src="' + image_path + 'modx_plus_up.png" alt="' + lang['ADD_FIELD_ABOVE'] + '" onclick="modx_add_field(\'' + obj_id + new_edit + '\', \'' + dl_id + '\', \'dl\', \'above\', 0);" title="' + lang['ADD_FIELD_ABOVE_EXPLAIN'] + '" /> ';
					element += '<img class="action-image" src="' + image_path + 'modx_plus_down.png" alt="' + lang['ADD_FIELD_BELOW'] + '" onclick="modx_add_field(\'' + obj_id + new_edit + '\', \'' + dl_id + '\', \'dl\', \'below\', 0)" title="' + lang['ADD_FIELD_BELOW_EXPLAIN'] + '" /> ';
					element += '<img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['SELECT_TYPE_EXPLAIN'] + '" />';
				element += '</div>';
			element += '</dt>';
			element += '<dd id="' + dd_id + '">';
				element += '<span id="' + dd_id + '_field">';
					element += '<input class="inputbox autowidth" id="' + dd_id + '_data" type="text" name="' + obj_id + '[' + dl_id + '][data]" disabled="disabled" size="30" value="" />';
				element += '</dd>';
				element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl_id + '\').remove();" />';
			element += '</dd>';
		element += '</dl>';
	}

	if(position == 'above')
	{
		$('#' + parent_id).before(element);
	}
	else
	{
		$('#' + parent_id).after(element);
	}
}

/**
* Generate the type select
*/
function modx_select(file_name, dt_id, dd_id, dl_id)
{
	var element = '<select class="krav" name="' + file_name + '[type]" onchange="if(this.options[this.selectedIndex].value != \'-\'){ get_select_change(this.options[this.selectedIndex].value, \'' + dt_id + '\', \'' + dd_id + '\', \'' + file_name + '\', \'' + dl_id + '\') }">';
		element += '<option value="-" selected="selected">' + lang['SELECT_TYPE'] + '</option>';
		element += '<option value="comment">' + lang['COMMENT'] + '</option>';
		element += '<option value="find">' + lang['FIND'] + '</option>';
		element += '<option value="after-add">' + lang['ADD_AFTER'] + '</option>';
		element += '<option value="before-add">' + lang['ADD_BEFORE'] + '</option>';
		element += '<option value="replace-with">' + lang['REPLACE_WITH'] + '</option>';
		element += '<option value="operation">' + lang['OPERATION'] + '</option>';
		element += '<option value="remove">' + lang['REMOVE'] + '</option>';
		element += '<option value="inline-find">' + lang['INLINE_FIND'] + '</option>';
		element += '<option value="inline-after-add">' + lang['INLINE'] + ' ' + lang['ADD_AFTER'] + '</option>';
		element += '<option value="inline-before-add">' + lang['INLINE'] + ' ' + lang['ADD_BEFORE'] + '</option>';
		element += '<option value="inline-replace-with">' + lang['INLINE'] + ' ' + lang['REPLACE_WITH'] + '</option>';
		element += '<option value="inline-operation">' + lang['INLINE'] + ' ' + lang['OPERATION'] + '</option>';
		element += '<option value="inline-remove">' + lang['INLINE'] + ' ' + lang['REMOVE'] + '</option>';
	element += '</select>';

	return(element);
}

function act_file()
{
	var file_id = 'f_' + file_cnt++;
	var edit_id = 'e_' + edit_cnt++;
	var dl1_id = 'edl_' + dl_cnt++;
	var dl2_id = 'edl_' + dl_cnt++;
	var dd_id = 'edd_' + dd_cnt++;
	var dt_id = 'edt_' + dt_cnt++;

	var element = '<fieldset class="modx-level1 fields2 file-edit" id="' + file_id + '">';
		element += '<dl id="' + dl1_id + '">';
			element += '<dt>';
				element += '<label for="modx-' + file_id + '-file">' + lang['FILE_OPEN'] + ':</label>';
				element += '<img class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['FILE_OPEN_EXPLAIN'] + '" />';
			element += '</dt>';
			element += '<dd>';
				element += '<input class="inputbox medium" type="text" name="modx[' + file_id + '][file]" id="modx-' + file_id + '-file" size="88" value="" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + file_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';

		element += '<hr /><br />';

		element += '<fieldset class="modx-level2" id="' + edit_id + '">';
			element += '<legend> ' + lang['EDIT'];
				element += ' <img class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['EDIT_EXPLAIN'] + '" /> ';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + edit_id + '\').remove()" />';
				element += '<button type="button" class="button1" onclick="modx_add_field(\'modx[' + file_id + ']\', \'' + edit_id + '\', \'edit\', \'above\', 1);">' + lang['EDIT_ADD_ABOVE'] + '</button> ';
				element += '<button type="button" class="button1" onclick="modx_add_field(\'modx[' + file_id + ']\', \'' + edit_id + '\', \'edit\', \'below\', 1)">' + lang['EDIT_ADD_BELOW'] + '</button>';
			element += ' <strong>' + lang['EDIT_FIND_EXPLAIN'] + '</strong></legend>';
			element += '<p style="font-size: 1em">' + lang['EDIT_NOTE'] + '</p>';

			element += '<dl id="' + dl2_id + '">';
				element += '<dt id="' + dt_id + '">';
					element += '<label>' + lang['TYPE'] + ':</label>';
					element += '<span>' + modx_select('modx[' + file_id + '][' + edit_id + '][' + dl2_id + ']', dt_id, dd_id, dl2_id) + '</span>';
					element += '<div id="' + dt_id + '_options" style="margin-top: 5px">';
						element += ' <img class="action-image" src="' + image_path + 'modx_plus_up.png" alt="' + lang['ADD_FIELD_ABOVE'] + '" onclick="modx_add_field(\'modx[' + file_id + '][' + edit_id + ']\', \'' + dl2_id + '\', \'dl\', \'above\', 0);" title="' + lang['ADD_FIELD_ABOVE_EXPLAIN'] + '" />';
						element += ' <img class="action-image" src="' + image_path + 'modx_plus_down.png" alt="' + lang['ADD_FIELD_BELOW'] + '" onclick="modx_add_field(\'modx[' + file_id + '][' + edit_id + ']\', \'' + dl2_id + '\', \'dl\', \'below\', 0);" title="' + lang['ADD_FIELD_BELOW_EXPLAIN'] + '" />';
						element += ' <img id="' + dd_id + '_info" class="sign" src="' + image_path + 'modx_info.png" alt="' + lang['INFO_ICON'] + '" title="' + lang['SELECT_TYPE_EXPLAIN'] + '" />';
					element += '</div>';
				element += '</dt>';
				element += '<dd id="' + dd_id + '">';
					element += '<span id="' + dd_id + '_field">';
						element += '<input class="inputbox autowidth" id="' + dd_id + '_data" type="text" name="modx[' + file_id + '][' + edit_id + '][' + dl2_id + '][data]" disabled="disabled" size="30" value="" />';
					element += '</span>';
					element += '<img id="' + dd_id + '_delete_tool" class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dl2_id + '\').remove();" />';
				element += '</dd>';
			element += '</dl>';
		element += '</fieldset>';
	element += '</fieldset>';

	$('#modx-field').append(element);
}

/**
* Add author field(s)
*/
function add_author()
{
	var field_id = 'author_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level1 fields2" id="' + field_id + '">';
		element += '<dl>';
			element += '<dt class="author-rows"><label for="author-' + field_id + '-username">' + lang['USERNAME'] + ':*</label>';
			element += '<dd class="author-rows">';
				element += '<input class="inputbox autowidth" type="text" name="author[' + field_id + '][username]" id="author-' + field_id + '-username" size="40" maxlength="255" value="" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + field_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="author-' + field_id + '-phpbbcom">' + lang['NOT_PHPBB'] + ':</label></dt>';
			element += '<dd class="author-rows"><label>';
				element += '<input type="checkbox" name="author[' + field_id + '][phpbbcom]" id="author-' + field_id + '-phpbbcom" />';
				element += '<span style="font-size: 12px;">(' + lang['NOT_PHPBB_EXPLAIN'] + ')</span>';
			element += '</label></dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="author-' + field_id + '-realname">' + lang['REAL_NAME'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input class="inputbox autowidth" type="text" name="author[' + field_id + '][realname]" id="author-' + field_id + '-realname" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="author-' + field_id + '-homepage">' + lang['WWW'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input class="inputbox autowidth" type="text" name="author[' + field_id + '][homepage]" id="author-' + field_id + '-homepage" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';
		element += '<dl>';
			element += '<dt class="author-rows"><label for="author-' + field_id + '-email">' + lang['E_MAIL'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input class="inputbox autowidth" type="text" name="author[' + field_id + '][email]" id="author-' + field_id + '-email" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';
		element += '<div id="' + field_id + '-pre"></div>';

		element += '<input class="button2" type="button" value="' + lang['CONTRIBUTION_ADD'] + '" onclick="add_contributor(\'' + field_id + '\');" /> <img class="sign" src="' + image_path + 'modx_info.png" alt="Info icon" title="' + lang['CONTRIBUTION_EXPLAIN'] + '" />';
	element += '</fieldset>';

	$('#authors').append(element);
}

/**
* Add a contributor-field
*/
function add_contributor(field_id)
{
	var temp = 'tm_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level2" id="' + dd_id + '">';
		element += '<dl>';
			element += '<dt class="author-rows"><label for="contributor-' + field_id + '-' + temp + '-status">' + lang['STATUS'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<select name="author[' + field_id + '][contributions][' + temp + '][status]" id="contributor-' + field_id + '-' + temp + '-status">';
					element += '<option value="past">' + lang['PAST'] + '</option>';
					element += '<option value="current" selected="selected">' + lang['CURRENT'] + '</option>';
				element += '</select>';
				element += ' <img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="contributor-' + field_id + '-' + temp + '-position">' + lang['POSITION'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input type="text" name="author[' + field_id + '][contributions][' + temp + '][position]" id="contributor-' + field_id + '-' + temp + '-position" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="contributor-' + field_id + '-' + temp + '-from">' + lang['FROM'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input type="text" name="author[' + field_id + '][contributions][' + temp + '][from]" id="contributor-' + field_id + '-' + temp + '-from" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="author-rows"><label for="contributor-' + field_id + '-' + temp + '-to">' + lang['TO'] + ':</label></dt>';
			element += '<dd class="author-rows">';
				element += '<input type="text" name="author[' + field_id + '][contributions][' + temp + '][to]" id="contributor-' + field_id + '-' + temp + '-to" size="40" maxlength="255" value="" />';
			element += '</dd>';
		element += '</dl>';
	element += '</fieldset>';

	$('#' + field_id + '-pre').append(element);
}

/**
* Add description
*/
function add_desc()
{
	var field_id = 'desc_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd id="' + dd_id + '"><br />';
		element += '<textarea class="inputbox right-tools" name="desc[' + field_id + '][desc]" id="desc_' + field_id + '_desc" rows="5"></textarea>';
		element += '<div class="right-tools">';
			element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '<img class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].desc_' + field_id + '_desc.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
			element += '<img class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].desc_' + field_id + '_desc.rows>7){document.forms[\'modxform\'].desc_' + field_id + '_desc.rows-=4}else{document.forms[\'modxform\'].desc_' + field_id + '_desc.rows-=(document.forms[\'modxform\'].desc_' + field_id + '_desc.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
		element += '</div>';
		element += '<br style="clear:both" />' + lang_select('desc[' + field_id + '][lang]');
	element += '</dd>';

	$('#desc-field').append(element);
}

/**
* Add the main copy-field
*/
function add_copy()
{
	var field_id = 'fc_' + field_cnt++;
	var temp = 'tm_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;
	var dd_id2 = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level2 fields2" id="dd-copy">';
		element += '<dl id="dl-copy">';
			element += '<dt class="copy-rows">';
				element += '<label>' + lang['COPY_FROM_TO'] + '</label>';
				element += '<img class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['FILE_ADD'] + '" title="' + lang['FILE_ADD'] + '" onclick="add_file_copy();" /><img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#dd-copy\').remove(); document.getElementById(\'addCopyField\').style.display=\'\';" />';
			element += '</dt>';

			element += '<dd class="copy-rows" id="' + dd_id2 + '">';
				element += '<input class="inputbox copy-to" name="copy[' + temp + '][from]" size="85" maxlength="255" value="" type="text" /> &raquo; ';
				element += '<input class="inputbox" name="copy[' + temp + '][to]" size="85" maxlength="255" value="" type="text" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id2 + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';
	element += '</fieldset>';

	$('#copy-field').append(element);
}

/**
* Add file copy
*/
function add_file_copy()
{
	temp = 'tm_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd class="copy-rows" id="' + dd_id + '">';
		element += '<input class="inputbox copy-to" name="copy[' + temp + '][from]" size="85" maxlength="255" value="" type="text" /> &raquo; ';
		element += '<input class="inputbox" name="copy[' + temp + '][to]" size="85" maxlength="255" value="" type="text" />';
		element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
	element += '</dd>';

	$('#dl-copy').append(element);
}

/**
* Add the main delete-field
*/
function add_delete()
{
	var field_id = 'fc_' + field_cnt++;
	var temp = 'tm_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;
	var dd_id2 = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level2 fields2" id="dd-delete">';
		element += '<dl id="dl-delete">';
			element += '<dt class="copy-rows">';
				element += '<label>' + lang['DELETE'] + ':</label>';
				element += '<img class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['FILE_ADD'] + '" title="' + lang['FILE_ADD'] + '" onclick="add_file_delete();" /><img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#dd-delete\').remove(); document.getElementById(\'addDeleteField\').style.display=\'\';" />';
			element += '</dt>';

			element += '<dd class="copy-rows" id="' + dd_id2 + '">';
				element += '<input class="inputbox copy-to" name="delete[' + temp + ']" size="85" maxlength="255" value="" type="text" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id2 + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';
	element += '</fieldset>';

	$('#delete-field').append(element);
}

/**
* Add file delete
*/
function add_file_delete()
{
	temp = 'tm_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd class="copy-rows" id="' + dd_id + '">';
		element += '<input class="inputbox copy-to" name="delete[' + temp + ']" size="85" maxlength="255" value="" type="text" />';
		element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
	element += '</dd>';

	$('#dl-delete').append(element);
}

/**
* Add a history-field
*/
function add_history()
{
	var field_id = 'hf_' + field_cnt++;
	var temp = 'logdd_' + dd_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level1 fields2" id="' + dd_id + '">';
		element += '<dl>';
			element += '<dt class="history-rows"><label for="history-' + field_id + '-version">' + lang['VERSION'] + ':*</label></dt>';
			element += '<dd class="history-rows">';
				element += '<input class="inputbox autowidth" name="history[' + field_id + '][version]" id="history-' + field_id + '-version" size="10" maxlength="255" value="" type="text" />';
				element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="history-rows"><label for="history-' + field_id + '-date">' + lang['DATE'] + ':*</label></dt>';
			element += '<dd class="history-rows">';
				element += '<input class="inputbox autowidth" name="history[' + field_id + '][date]" id="history-' + field_id + '-date" size="20" maxlength="255" value="" type="text" />';
				element += '<span style="font-size: 12px;"> (' + lang['DATE_EXPLAIN'] + ')</span>';
			element += '</dd>';
		element += '</dl>';

		element += '<div id="' + field_id + '">';
			element += '<hr class="dashed" />';
			element += '<dl>';
				element += '<dt class="history-rows">';
					element += '<label for="history-' + field_id + '-change-' + temp + '-data">' + lang['CHANGE'] + ':*</label>';
				element += '</dt>';
				element += '<dd class="history-rows">';
					element += '<input class="inputbox medium" name="history[' + field_id + '][changelog][' + temp + '][change]" id="history-' + field_id + '-change-' + temp + '-data" size="80" maxlength="255" value="" type="text" />';
					element += '<span>' + lang_select('history[' + field_id + '][changelog][' + temp + '][lang]') + '</span>';
				element += '</dd>';
			element += '</dl>';
		element += '</div>';

		element += '<input class="button2" value="' + lang['CHANGE_ADD'] + '" onclick="add_history_change(\'' + field_id + '\');" type="button" />';
	element += '</fieldset>';

	$('#history-fields').append(element);
}

/**
* Add a change to the history
*/
function add_history_change(field_id)
{
	var temp = 'logdd_' + dd_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<div id="' + dd_id + '">';
		element += '<hr class="dashed" />';
		element += '<dl>';
			element += '<dt class="history-rows">';
				element += '<label for="history-' + field_id + '-change-' + temp + '-data">' + lang['CHANGE'] + ':*</label>';
			element += '</dt>';
			element += '<dd class="history-rows">';
				element += '<input class="inputbox medium" name="history[' + field_id + '][changelog][' + temp + '][change]" id="history-' + field_id + '-change-' + temp + '-data" size="80" maxlength="255" value="" type="text" />';
				element += '<span>' + lang_select('history[' + field_id + '][changelog][' + temp + '][lang]') + '</span>';
				element += ' <img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';
	element += '</div>';

	$('#' + field_id).append(element);
}

/**
* Add link-field
*/
function add_link()
{
	var field_id = 'lf_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level2" id="' + dd_id + '">';
		element += '<dl>';
			element += '<dt><label for="links-' + field_id + '-type">' + lang['TYPE'] + ':*</label></dt>';
			element += '<dd>';
				element += '<select name="links[' + field_id + '][type]" id="links-' + field_id + '-type">';
					element += '<option value="contrib" selected="selected">' + lang['CONTRIB'] + '</option>';
					element += '<option value="dependency">' + lang['DEPENDENCY'] + '</option>';
					element += '<option value="language">' + lang['LANGUAGE'] + '</option>';
					element += '<option value="parent">' + lang['PARENT'] + '</option>';
					element += '<option value="template-lang">' + lang['TEMPLATE_LANG'] + '</option>';
					element += '<option value="template">' + lang['TEMPLATE'] + '</option>';
					element += '<option value="text">' + lang['TEXT_FILE'] + '</option>';
					element += '<option value="uninstall">' + lang['UNINSTALL_INSTRUCTIONS'] + '</option>';
				element += '</select>';
				element += ' <img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt><label for="links-' + field_id + '-title">' + lang['LINK_TITLE'] + ':*</label></dt>';
			element += '<dd>';
				element += '<input class="inputbox medium" name="links[' + field_id + '][title]" id="links-' + field_id + '-title" size="80" maxlength="255" value="" type="text" />';
				element += lang_select('links[' + field_id + '][lang]');
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt><label for="links-' + field_id + '-href">' + lang['HREF'] + ':*</label></dt>';
			element += '<dd>';
				element += '<input class="inputbox medium" name="links[' + field_id + '][href]" id="links-' + field_id + '-href" size="80" maxlength="255" value="" type="text" />';
			element += '</dd>';
		element += '</dl>';
	element += '</fieldset>';

	$('#link-field').append(element);
}

/**
* Add notes
*/
function add_notes()
{
	var field_id = 'notes_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd id="' + dd_id + '"><br />';
		element += '<textarea class="inputbox right-tools" name="notes[' + field_id + '][note]" id="notes_' + field_id + '_note" rows="4"></textarea>';
		element += '<div class="right-tools">';
			element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove();" />';
			element += '<img class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].notes_' + field_id + '_note.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
			element += '<img class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].notes_' + field_id + '_note.rows>7){document.forms[\'modxform\'].notes_' + field_id + '_note.rows-=4}else{document.forms[\'modxform\'].notes_' + field_id + '_note.rows-=(document.forms[\'modxform\'].notes_' + field_id + '_note.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
		element += '</div>';
		element += '<br style="clear:both" />' + lang_select('notes[' + field_id + '][lang]');
	element += '</dd>';

	$('#notes-field').append(element);
}

/**
* Add diy
*/
function add_diy()
{
	var field_id = 'diy_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd id="' + dd_id + '"><br />';
		element += '<textarea class="inputbox right-tools" name="diy[' + field_id + '][diy]" id="diy_' + field_id + '_diy" rows="4"></textarea>';
		element += '<div class="right-tools">';
			element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
			element += '<img id="' + field_id + '-plus" class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].diy_' + field_id + '_diy.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
			element += '<img id="' + field_id + '-minus" class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].diy_' + field_id + '_diy.rows>7){document.forms[\'modxform\'].diy_' + field_id + '_diy.rows-=4}else{document.forms[\'modxform\'].diy_' + field_id + '_diy.rows-=(document.forms[\'modxform\'].diy_' + field_id + '_diy.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
		element += '</div>';
		element += '<br style="clear:both" />' + lang_select('diy[' + field_id + '][lang]');
	element += '</dd>';

	$('#diy-field').append(element);
}

/**
* Add SQL-field
*/
function add_sql()
{
	var field_id = 'sql_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<fieldset class="modx-level2 fields2" id="' + dd_id + '">';
		element += '<dl>';
			element += '<dt class="sql-rows"><label for="sql-' + field_id + '-dbms">' + lang['DBMS'] + ':</label></dt>';
			element += '<dd class="sql-rows">';
				element += '<span><select name="sql[' + field_id + '][dbms]" id="sql-' + field_id + '-dbms">';
					element += '<option value="mysql_40">MySQL 4.0</option>';
					element += '<option value="mysql_41">MySQL 4.1</option>';
					element += '<option value="mssaccess">MSSQL</option>';
					element += '<option value="oracle">Oracle</option>';
					element += '<option value="postgres">PostgreSQL</option>';
					element += '<option value="firebird">FireBird</option>';
					element += '<option value="sqlite">SQLite</option>';
					element += '<option value="sql-parser" selected="selected">SQL Parser (' + lang['DEFAULT'] + ')</option>';
				element += '</select></span>';
			element += '</dd>';
		element += '</dl>';

		element += '<dl>';
			element += '<dt class="sql-rows"><label for="sql-' + field_id + '-query">' + lang['QUERY'] + ':*</label></dt>';
			element += '<dd class="sql-rows">';
				element += '<textarea class="inputbox right-tools" name="sql[' + field_id + '][query]" id="sql_' + field_id + '_query" rows="4"></textarea>';
				element += '<div class="right-tools">';
					element += '<img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove()" />';
					element += '<img class="action-image" src="' + image_path + 'modx_plus.png" alt="' + lang['ADD_FOUR'] + '" onclick="document.forms[\'modxform\'].sql_' + field_id + '_query.rows+=4" title="' + lang['ADD_FOUR_EXPLAIN'] + '" />';
					element += '<img class="action-image" src="' + image_path + 'modx_del.png" alt="' + lang['REMOVE_FOUR'] + '" onclick="if(document.forms[\'modxform\'].sql_' + field_id + '_query.rows>7){document.forms[\'modxform\'].sql_' + field_id + '_query.rows-=4}else{document.forms[\'modxform\'].sql_' + field_id + '_query.rows-=(document.forms[\'modxform\'].sql_' + field_id + '_query.rows-4)};" title="' + lang['REMOVE_FOUR_EXPLAIN'] + '" />';
				element += '</div>';
			element += '</dd>';
		element += '</dl>';
	element += '</fieldset>';

	$('#sql-field').append(element);
}

/**
* Add title
*/
function add_title()
{
	var field_id = 'title_' + field_cnt++;
	var dd_id = 'dd_' + dd_cnt++;

	var element = '<dd id="' + dd_id + '">';
	element += '<input class="inputbox medium" type="text" name="title[' + field_id + '][title]" size="53" maxlength="255" value="" /> ';
	element += lang_select('title[' + field_id + '][lang]');
	element += ' <img class="action-image" src="' + image_path + 'modx_delete.png" alt="' + lang['DELETE'] + '" onclick="$(\'#' + dd_id + '\').remove();" />';
	element += '</dd>';

	$('#title-field').append(element);
}

/**
* Counts the number of rows needed for <textarea>'s
*/
function count_rows(in_string, row_len, max_rows, min_rows)
{
	var newline = String.fromCharCode(10);
	var str_arr = new Array();
	str_arr = in_string.split(newline);
	var str_len = 0;
	var str_rows = 0;
	var str_sum = 0;

	for(var i in str_arr)
	{
		if(!isNaN(i))
		{
			str_rows++;
			str_len = str_arr[i].length;
			if(str_len > row_len)
			{
				str_sum = Math.ceil(str_len / row_len) -1;
				str_rows += str_sum;
			}
		}
	}

	str_rows = (str_rows <= min_rows) ? min_rows : str_rows;
	str_rows = (str_rows >= max_rows) ? max_rows : str_rows;
	return(str_rows);
}

/**
* Generate the language select
*/
function lang_select(field_id)
{
	var element = '<select name="' + field_id + '">';
	element += '<option value="ab">' + lang['ABKHAZIAN'] + '</option>';
	element += '<option value="aa">' + lang['AFAR'] + '</option>';
	element += '<option value="af">' + lang['AFRIKAANS'] + '</option>';
	element += '<option value="sq">' + lang['ALBANIAN'] + '</option>';
	element += '<option value="am">' + lang['AMHARIC'] + '</option>';
	element += '<option value="ar">' + lang['ARABIC'] + '</option>';
	element += '<option value="hy">' + lang['ARMENIAN'] + '</option>';
	element += '<option value="as">' + lang['ASSAMESE'] + '</option>';
	element += '<option value="ay">' + lang['AYMARA'] + '</option>';
	element += '<option value="az">' + lang['AZERBAIJANI'] + '</option>';
	element += '<option value="ba">' + lang['BASHKIR'] + '</option>';
	element += '<option value="eu">' + lang['BASQUE'] + '</option>';
	element += '<option value="bn">' + lang['BENGALI'] + '</option>';
	element += '<option value="dz">' + lang['BHUTANI'] + '</option>';
	element += '<option value="bh">' + lang['BIHARI'] + '</option>';
	element += '<option value="bi">' + lang['BISLAMA'] + '</option>';
	element += '<option value="br">' + lang['BRETON'] + '</option>';
	element += '<option value="bg">' + lang['BULGARIAN'] + '</option>';
	element += '<option value="my">' + lang['BURMESE'] + '</option>';
	element += '<option value="be">' + lang['BYELORUSSIAN'] + '</option>';
	element += '<option value="km">' + lang['CAMBODIAN'] + '</option>';
	element += '<option value="ca">' + lang['CATALAN'] + '</option>';
	element += '<option value="zh">' + lang['CHINESE'] + '</option>';
	element += '<option value="co">' + lang['CORSICAN'] + '</option>';
	element += '<option value="hr">' + lang['CROATIAN'] + '</option>';
	element += '<option value="cs">' + lang['CZECH'] + '</option>';
	element += '<option value="da">' + lang['DANISH'] + '</option>';
	element += '<option value="nl">' + lang['DUTCH'] + '</option>';
	element += '<option value="en" selected="selected">' + lang['ENGLISH'] + '</option>';
	element += '<option value="eo">' + lang['ESPERANTO'] + '</option>';
	element += '<option value="et">' + lang['ESTONIAN'] + '</option>';
	element += '<option value="fo">' + lang['FAEROESE'] + '</option>';
	element += '<option value="fj">' + lang['FIJI'] + '</option>';
	element += '<option value="fi">' + lang['FINNISH'] + '</option>';
	element += '<option value="fr">' + lang['FRENCH'] + '</option>';
	element += '<option value="fy">' + lang['FRISIAN'] + '</option>';
	element += '<option value="gl">' + lang['GALICIAN'] + '</option>';
	element += '<option value="ka">' + lang['GEORGIAN'] + '</option>';
	element += '<option value="de">' + lang['GERMAN'] + '</option>';
	element += '<option value="el">' + lang['GREEK'] + '</option>';
	element += '<option value="kl">' + lang['GREENLANDIC'] + '</option>';
	element += '<option value="gn">' + lang['GUARANI'] + '</option>';
	element += '<option value="gu">' + lang['GUJARATI'] + '</option>';
	element += '<option value="ha">' + lang['HAUSA'] + '</option>';
	element += '<option value="iw">' + lang['HEBREW'] + '</option>';
	element += '<option value="hi">' + lang['HINDI'] + '</option>';
	element += '<option value="hu">' + lang['HUNGARIAN'] + '</option>';
	element += '<option value="is">' + lang['ICELANDIC'] + '</option>';
	element += '<option value="in">' + lang['INDONESIAN'] + '</option>';
	element += '<option value="ia">' + lang['INTERLINGUA'] + '</option>';
	element += '<option value="ik">' + lang['INUPIAK'] + '</option>';
	element += '<option value="ga">' + lang['IRISH'] + '</option>';
	element += '<option value="it">' + lang['ITALIAN'] + '</option>';
	element += '<option value="ja">' + lang['JAPANESE'] + '</option>';
	element += '<option value="jw">' + lang['JAVANESE'] + '</option>';
	element += '<option value="kn">' + lang['KANNADA'] + '</option>';
	element += '<option value="ks">' + lang['KASHMIRI'] + '</option>';
	element += '<option value="kk">' + lang['KAZAKH'] + '</option>';
	element += '<option value="rw">' + lang['KINYARWANDA'] + '</option>';
	element += '<option value="ky">' + lang['KIRGHIZ'] + '</option>';
	element += '<option value="rn">' + lang['KIRUNDI'] + '</option>';
	element += '<option value="ko">' + lang['KOREAN'] + '</option>';
	element += '<option value="ku">' + lang['KURDISH'] + '</option>';
	element += '<option value="lo">' + lang['LAOTHIAN'] + '</option>';
	element += '<option value="la">' + lang['LATIN'] + '</option>';
	element += '<option value="lv">' + lang['LETTISH'] + '</option>';
	element += '<option value="ln">' + lang['LINGALA'] + '</option>';
	element += '<option value="lt">' + lang['LITHUANIAN'] + '</option>';
	element += '<option value="mk">' + lang['MACEDONIAN'] + '</option>';
	element += '<option value="mg">' + lang['MALAGASY'] + '</option>';
	element += '<option value="ms">' + lang['MALAY'] + '</option>';
	element += '<option value="ml">' + lang['MALAYALAM'] + '</option>';
	element += '<option value="mt">' + lang['MALTESE'] + '</option>';
	element += '<option value="mi">' + lang['MAORI'] + '</option>';
	element += '<option value="mr">' + lang['MARATHI'] + '</option>';
	element += '<option value="mo">' + lang['MOLDAVIAN'] + '</option>';
	element += '<option value="mn">' + lang['MONGOLIAN'] + '</option>';
	element += '<option value="na">' + lang['NAURU'] + '</option>';
	element += '<option value="ne">' + lang['NEPALI'] + '</option>';
	element += '<option value="no">' + lang['NORWEGIAN'] + '</option>';
	element += '<option value="oc">' + lang['OCCITAN'] + '</option>';
	element += '<option value="or">' + lang['ORIYA'] + '</option>';
	element += '<option value="om">' + lang['OROMO'] + '</option>';
	element += '<option value="ps">' + lang['PASHTO'] + '</option>';
	element += '<option value="fa">' + lang['PERSIAN'] + '</option>';
	element += '<option value="pl">' + lang['POLISH'] + '</option>';
	element += '<option value="pt">' + lang['PORTUGUESE'] + '</option>';
	element += '<option value="pa">' + lang['PUNJABI'] + '</option>';
	element += '<option value="qu">' + lang['QUECHUA'] + '</option>';
	element += '<option value="rm">' + lang['RHAETO_ROMANCE'] + '</option>';
	element += '<option value="ro">' + lang['ROMANIAN'] + '</option>';
	element += '<option value="ru">' + lang['RUSSIAN'] + '</option>';
	element += '<option value="sm">' + lang['SAMOAN'] + '</option>';
	element += '<option value="sg">' + lang['SANGRO'] + '</option>';
	element += '<option value="sa">' + lang['SANSKRIT'] + '</option>';
	element += '<option value="gd">' + lang['SCOTS_GAELIC'] + '</option>';
	element += '<option value="sr">' + lang['SERBIAN'] + '</option>';
	element += '<option value="sh">' + lang['SERBO_CROATIAN'] + '</option>';
	element += '<option value="st">' + lang['SESOTHO'] + '</option>';
	element += '<option value="tn">' + lang['SETSWANA'] + '</option>';
	element += '<option value="sn">' + lang['SHONA'] + '</option>';
	element += '<option value="sd">' + lang['SINDHI'] + '</option>';
	element += '<option value="si">' + lang['SINGHALESE'] + '</option>';
	element += '<option value="ss">' + lang['SISWATI'] + '</option>';
	element += '<option value="sk">' + lang['SLOVAK'] + '</option>';
	element += '<option value="sl">' + lang['SLOVENIAN'] + '</option>';
	element += '<option value="so">' + lang['SOMALI'] + '</option>';
	element += '<option value="es">' + lang['SPANISH'] + '</option>';
	element += '<option value="su">' + lang['SUDANESE'] + '</option>';
	element += '<option value="sw">' + lang['SWAHILI'] + '</option>';
	element += '<option value="sv">' + lang['SWEDISH'] + '</option>';
	element += '<option value="tl">' + lang['TAGALOG'] + '</option>';
	element += '<option value="tg">' + lang['TAJIK'] + '</option>';
	element += '<option value="ta">' + lang['TAMIL'] + '</option>';
	element += '<option value="tt">' + lang['TATAR'] + '</option>';
	element += '<option value="te">' + lang['TEGULU'] + '</option>';
	element += '<option value="th">' + lang['THAI'] + '</option>';
	element += '<option value="bo">' + lang['TIBETAN'] + '</option>';
	element += '<option value="ti">' + lang['TIGRINYA'] + '</option>';
	element += '<option value="to">' + lang['TONGA'] + '</option>';
	element += '<option value="ts">' + lang['TSONGA'] + '</option>';
	element += '<option value="tr">' + lang['TURKISH'] + '</option>';
	element += '<option value="tk">' + lang['TURKMEN'] + '</option>';
	element += '<option value="tw">' + lang['TWI'] + '</option>';
	element += '<option value="uk">' + lang['UKRAINIAN'] + '</option>';
	element += '<option value="ur">' + lang['URDU'] + '</option>';
	element += '<option value="uz">' + lang['UZBEK'] + '</option>';
	element += '<option value="vi">' + lang['VIETNAMESE'] + '</option>';
	element += '<option value="vo">' + lang['VOLAPUK'] + '</option>';
	element += '<option value="cy">' + lang['WELSH'] + '</option>';
	element += '<option value="wo">' + lang['WOLOF'] + '</option>';
	element += '<option value="xh">' + lang['XHOSA'] + '</option>';
	element += '<option value="ji">' + lang['YIDDISH'] + '</option>';
	element += '<option value="yo">' + lang['YORUBA'] + '</option>';
	element += '<option value="zu">' + lang['ZULU'] + '</option>';
	element += '<option value="en">' + lang['ENGLISH'] + '</option>';
	element += '</select>';

	return(element);
}
