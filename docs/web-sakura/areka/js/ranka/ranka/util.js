// ���������ŏE�������[�e�B���e�B�֐���S���˂�����ł�������
(function() {

// RegExp�̃G�X�P�[�v
var __specials__ = "/.*+?|()[]{}\\".split("");
var __sre__ = new RegExp("(\\" + __specials__.join("|\\") + ")", "g");
RegExp.escape = function(text) { return text.replace(__sre__, "\\$1"); }

})();