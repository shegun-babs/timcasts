#-----------------------------------------------------------------------------------|
# envoy run push --message='git message here' --prod
# envoy run pull-on-server
# envoy run deploy --message="git message here" --migrate --composer --prod
# envoy run setup-webapp
#-----------------------------------------------------------------------------------|

@servers(['local' => 'vagrant@localhost', 'web' => 'shegun@shegunbabs.com -p2442'])

@setup
    $localAppDir = "/var/www/timcasts";
@endsetup


@task('push', ['on' => 'local'])

    echo {{ date("d-m-Y H:i:s "). "==== Start push command ====\n" }}

    #navigate to app folder
    cd {{ $localAppDir }}

    echo {{ date("d-m-Y H:i:s "). "==== Add untracked files ====\n" }}
    git add .

    #commit progress
    @if ($message)
        git commit -m "{{ $message }}"
    @else
        git commit -m "{{ 'Regular update on ' . date("d-m-Y H:i:s") }}"
    @endif

    #push to main
    echo {{ date("d-m-Y H:i:s "). "==== Git push to main ====\n" }}
    git push -u origin main

    #print extra line
    printf "\n"

@endtask

