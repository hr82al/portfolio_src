function port_deploy
    pushd .
    cd /home/pi/docs/workspace/react/portfolio_src/
    pnpm build
    cd /home/pi/docs/workspace/react/portfolio
    rm -rf index.html assets
    cp -r /home/pi/docs/workspace/react/portfolio_src/dist/* /home/pi/docs/workspace/react/portfolio
    git add -A .
    git commit --amend -m "*"
    git push -f
    popd
end
