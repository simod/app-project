Sample app project
=================

Base server side technology

- python
- django

Base client side technology

- CoffeeScript
- Jquery
- Require.js
- Ember.js

Setup

Better use virtualenv with virtualenvwrapper

> sudo npm install -g coffee-script

> pip install -r requirements/base.txt
> pip install -r requirements/local.txt (for development)

Run in development mode

> python manage.py runserver --settings=playground.settings.local