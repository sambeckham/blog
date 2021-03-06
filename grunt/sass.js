module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: ['*.scss'],
            dest: '.tmp/css',
            ext: '.css'
        }],
        options: {
            style: 'expanded',
            'line-comments': true
        }
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: ['*.scss','!patterns.scss'],
            dest: 'web/css',
            ext: '.css'
        }],
        options: {
            style: 'compressed',
        }
    },
};
