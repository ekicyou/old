@echo off
echo ..�p�����[�^�Z�b�g
set version=040729a


set ghost_id=dot_sakura_020

set ghost_select=dot_sakura_020
set shell_select=dot_sakura_020
set balloon_select=dot_sakura_000
set balloon_name=bottle
set crow_select=crow

set work_base_dir=c:\wrkdir\download
set work_tmp_dir=%work_base_dir%\tmp
set ssp_dir=c:\wintools\����\ssp

pushd ..\..\..
  call packUtil\%1.bat
  popd
