/*
@*************************************************************************@
@ @author Mansur Altamirov (Mansur_TL)									  @
@ @author_url 1: https://www.instagram.com/mansur_tl                      @
@ @author_url 2: http://codecanyon.net/user/mansur_tl                     @
@ @author_email: highexpresstore@gmail.com                                @
@*************************************************************************@
@ ColibriSM - The Ultimate Modern Social Media Sharing Platform           @
@ Copyright (c) 21.03.2020 ColibriSM. All rights reserved.                @
@*************************************************************************@
 */

SELECT r.`id`, r.`post_id`, r.`user_id`, r.`reason`, r.`seen`, r.`time`, CONCAT(u.`fname`, ' ', u.`lname`) AS name, u.`username`, u.`verified`, u.`avatar` FROM `<?php echo($data['t_reports']);?>` r
	
	INNER JOIN `<?php echo($data['t_users']);?>` u ON r.`user_id` = u.`id`

	WHERE u.`active` IN ('1', '2')

	<?php if($data['offset']): ?>
		<?php if($data['offset_to'] == 'gt'): ?>
			AND r.`id` > <?php echo($data['offset']); ?>
		<?php else: ?>
			AND r.`id` < <?php echo($data['offset']); ?>
		<?php endif; ?>	
	<?php endif; ?>

ORDER BY r.`id` <?php echo fetch_or_get($data['order'], 'DESC');?>

LIMIT <?php echo fetch_or_get($data['limit'], 7);?>