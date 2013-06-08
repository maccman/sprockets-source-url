require 'bundler/setup'
require 'bundler/gem_tasks'
require 'sprockets'
require 'sprockets/source_url'
require 'rake/testtask'
require 'bump/tasks'

task :example do
  env = Sprockets::Environment.new(File.expand_path('..', __FILE__))
  env.append_path 'examples/'

  target = File.expand_path('../examples/example.js', __FILE__)
  env['application.js'].write_to target
end

task :default => :test

Rake::TestTask.new do |t|
  t.libs << "test"
  t.warning = true
end
