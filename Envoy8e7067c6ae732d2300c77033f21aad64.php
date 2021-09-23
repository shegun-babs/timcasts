<?php $localAppDir = isset($localAppDir) ? $localAppDir : null; ?>
#-----------------------------------------------------------------------------------|
# envoy run push --message='git message here' --prod
# envoy run pull-on-server
# envoy run deploy --message="git message here" --migrate --composer --prod
# envoy run setup-webapp
#-----------------------------------------------------------------------------------|

<?php $__container->servers(['local' => 'vagrant@localhost', 'web' => 'shegun@shegunbabs.com -p2442']); ?>

<?php
    $localAppDir = "/var/www/timcasts";
?>


<?php $__container->startTask('push', ['on' => 'local']); ?>

    echo <?php echo date("d-m-Y H:i:s "). "==== Start push command ====\n"; ?>


    #navigate to app folder
    cd <?php echo $localAppDir; ?>


    echo <?php echo git config --list; ?>


#

<?php $__container->endTask(); ?>

